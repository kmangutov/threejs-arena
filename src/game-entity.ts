import * as THREE from 'three';
import type { Debuff, DebuffManager } from './systems';

export type EntityTeam = 'friendly' | 'enemy' | 'neutral';

export abstract class GameEntity {
  readonly id: string;
  readonly name: string;
  readonly team: EntityTeam;
  readonly mesh: THREE.Object3D;

  constructor(id: string, name: string, team: EntityTeam, mesh: THREE.Object3D) {
    this.id = id;
    this.name = name;
    this.team = team;
    this.mesh = mesh;
  }

  abstract get pos(): THREE.Vector3;
  abstract get alive(): boolean;
  abstract get hp(): number;
  abstract get maxHp(): number;
  abstract damage(amount: number, attacker?: GameEntity): boolean;
  abstract heal(amount: number): number;

  applyDebuff(debuffs: DebuffManager, debuff: Omit<Debuff, 'expiresAt'>): void {
    debuffs.applyDebuff(this.id, debuff);
  }

  getDebuffs(debuffs: DebuffManager): Debuff[] {
    return debuffs.getDebuffs(this.id);
  }
}

export interface EntityRefLike {
  id: string;
  name: string;
  team: EntityTeam;
  mesh: THREE.Object3D;
  readonly pos: THREE.Vector3;
  readonly alive: boolean;
  readonly hp: number;
  readonly maxHp: number;
  damage(amount: number, attacker?: EntityRefLike): boolean;
  heal(amount: number): number;
}

export class RefGameEntity extends GameEntity {
  private ref: EntityRefLike;

  constructor(ref: EntityRefLike) {
    super(ref.id, ref.name, ref.team, ref.mesh);
    this.ref = ref;
  }

  get pos(): THREE.Vector3 { return this.ref.pos; }
  get alive(): boolean { return this.ref.alive; }
  get hp(): number { return this.ref.hp; }
  get maxHp(): number { return this.ref.maxHp; }

  damage(amount: number, attacker?: GameEntity): boolean {
    return this.ref.damage(amount, attacker);
  }

  heal(amount: number): number {
    return this.ref.heal(amount);
  }
}

export class BasicGameEntity extends GameEntity {
  private position: THREE.Vector3;
  private currentHp: number;
  private readonly maximumHp: number;
  private readonly splats?: {
    spawnDamage(target: THREE.Object3D, amount: number): void;
    spawnHeal(target: THREE.Object3D, amount: number): void;
  };

  constructor(opts: {
    id: string;
    name: string;
    team: EntityTeam;
    mesh: THREE.Object3D;
    hp: number;
    splats?: {
      spawnDamage(target: THREE.Object3D, amount: number): void;
      spawnHeal(target: THREE.Object3D, amount: number): void;
    };
    position?: THREE.Vector3;
  }) {
    super(opts.id, opts.name, opts.team, opts.mesh);
    this.maximumHp = opts.hp;
    this.currentHp = opts.hp;
    this.splats = opts.splats;
    this.position = opts.position ?? opts.mesh.position;
  }

  get pos(): THREE.Vector3 { return this.position; }
  get alive(): boolean { return this.currentHp > 0; }
  get hp(): number { return this.currentHp; }
  get maxHp(): number { return this.maximumHp; }

  damage(amount: number): boolean {
    if (!this.alive) return false;
    this.currentHp = Math.max(0, this.currentHp - amount);
    this.splats?.spawnDamage(this.mesh, amount);
    return this.currentHp <= 0;
  }

  heal(amount: number): number {
    if (!this.alive || this.currentHp >= this.maximumHp) return 0;
    const before = this.currentHp;
    this.currentHp = Math.min(this.maximumHp, this.currentHp + amount);
    const healed = this.currentHp - before;
    if (healed > 0) this.splats?.spawnHeal(this.mesh, healed);
    return healed;
  }
}

export class GameEntityRegistry {
  private entities = new Map<string, GameEntity>();

  register(entity: GameEntity): GameEntity {
    this.entities.set(entity.id, entity);
    entity.mesh.userData.gameEntity = entity;
    return entity;
  }

  get(id: string | null | undefined): GameEntity | null {
    if (!id) return null;
    return this.entities.get(id) ?? null;
  }

  all(): Iterable<GameEntity> {
    return this.entities.values();
  }
}
