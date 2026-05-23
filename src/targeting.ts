/**
 * Targeting System - Click-to-target with raycasting
 */

import * as THREE from 'three';
import { prettyVec, dirToYaw, flattenXZ } from './coords';
import type { GameEntity } from './game-entity';

export interface TargetInfo {
  id: string;
  name: string;
  team: 'friendly' | 'enemy' | 'neutral';
  mesh: THREE.Object3D;
  distance: number;
  direction: THREE.Vector3;
}

export class TargetingSystem {
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private camera: THREE.Camera;
  private scene: THREE.Scene;
  private targetables: Map<THREE.Object3D, { id: string; name: string; team: 'friendly' | 'enemy' | 'neutral' }>;

  public currentTarget: TargetInfo | null = null;
  private targetRing: THREE.Mesh;

  // UI elements
  private nameElement: HTMLElement | null = null;
  private infoElement: HTMLElement | null = null;
  private healthElement: HTMLElement | null = null;
  private healthFillElement: HTMLElement | null = null;
  private healthTextElement: HTMLElement | null = null;

  constructor(camera: THREE.Camera, scene: THREE.Scene) {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.camera = camera;
    this.scene = scene;
    this.targetables = new Map();
    this.targetRing = this.createTargetRing();

    this.onClick = this.onClick.bind(this);
  }

  private createTargetRing(): THREE.Mesh {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.0, 1.12, 48),
      new THREE.MeshBasicMaterial({
        color: 0xffcc00,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    ring.name = 'TargetRing';
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.04;
    ring.renderOrder = 997;
    ring.visible = false;
    ring.userData.editorIgnore = true;
    return ring;
  }

  /**
   * Attach click listener
   */
  attach(element: HTMLElement): void {
    element.addEventListener('click', this.onClick);
    if (!this.targetRing.parent) this.scene.add(this.targetRing);

    // Get UI elements
    this.nameElement = document.getElementById('target-name');
    this.infoElement = document.getElementById('target-info');
    this.healthElement = document.getElementById('target-health');
    this.healthFillElement = document.getElementById('target-health-fill');
    this.healthTextElement = document.getElementById('target-health-text');
  }

  /**
   * Detach click listener
   */
  detach(element: HTMLElement): void {
    element.removeEventListener('click', this.onClick);
  }

  /**
   * Register a mesh as targetable
   */
  registerTargetable(
    mesh: THREE.Object3D,
    id: string,
    name: string,
    team: 'friendly' | 'enemy' | 'neutral'
  ): void {
    this.targetables.set(mesh, { id, name, team });
    mesh.userData.targetable = true;
    mesh.userData.entityId = id;
  }

  /**
   * Unregister a targetable mesh
   */
  unregisterTargetable(mesh: THREE.Object3D): void {
    this.targetables.delete(mesh);
  }

  private onClick(e: MouseEvent): void {
    // Calculate normalized device coordinates
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Update raycaster
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Get all targetable meshes
    const targetableMeshes = Array.from(this.targetables.keys());

    // Check for intersections
    const intersects = this.raycaster.intersectObjects(targetableMeshes, true);

    if (intersects.length > 0) {
      // Find the targetable parent
      let targetMesh: THREE.Object3D | null = null;
      let current: THREE.Object3D | null = intersects[0].object;

      while (current) {
        if (this.targetables.has(current)) {
          targetMesh = current;
          break;
        }
        current = current.parent;
      }

      if (targetMesh) {
        this.setTarget(targetMesh);
      }
    } else {
      // Clicked empty space - clear target
      this.clearTarget();
    }
  }

  /**
   * Set target to a specific mesh
   */
  setTarget(mesh: THREE.Object3D): void {
    const data = this.targetables.get(mesh);
    if (!data) return;

    // Calculate target info
    const direction = new THREE.Vector3();
    mesh.getWorldPosition(direction);

    this.currentTarget = {
      id: data.id,
      name: data.name,
      team: data.team,
      mesh,
      distance: 0,
      direction
    };

    // Update UI
    this.updateTargetRing();
    this.updateUI();

    console.log(`Target set: ${data.name} (${data.id})`);
  }

  /**
   * Clear current target
   */
  clearTarget(): void {
    this.currentTarget = null;
    this.targetRing.visible = false;
    this.updateUI();
    console.log('Target cleared');
  }

  /**
   * Update targeting info (call each frame)
   */
  update(playerPosition: THREE.Vector3): void {
    if (!this.currentTarget) return;

    // Get target world position
    const targetPos = new THREE.Vector3();
    this.currentTarget.mesh.getWorldPosition(targetPos);

    // Calculate distance
    this.currentTarget.distance = playerPosition.distanceTo(targetPos);

    // Calculate relative direction
    this.currentTarget.direction = targetPos.clone().sub(playerPosition);

    // Update UI with current info
    this.updateTargetRing();
    this.updateUI();
  }

  private updateTargetRing(): void {
    if (!this.currentTarget) return;
    const entity = this.currentTarget.mesh.userData.gameEntity as GameEntity | undefined;
    const targetPos = new THREE.Vector3();
    this.currentTarget.mesh.getWorldPosition(targetPos);
    const radius = Math.max(0.45, entity?.radius ?? 0.7);
    this.targetRing.position.set(targetPos.x, targetPos.y + 0.045, targetPos.z);
    this.targetRing.scale.setScalar(radius);
    this.targetRing.visible = true;
  }

  private updateUI(): void {
    if (!this.nameElement || !this.infoElement) return;

    if (!this.currentTarget) {
      this.nameElement.textContent = 'No Target';
      this.nameElement.style.color = '#888';
      this.infoElement.textContent = '';
      if (this.healthElement) this.healthElement.style.display = 'none';
    } else {
      const { name, team, distance, direction } = this.currentTarget;
      const entity = this.currentTarget.mesh.userData.gameEntity as GameEntity | undefined;

      // Set name with team color
      this.nameElement.textContent = name;
      this.nameElement.style.color = team === 'friendly' ? '#00ff88' : team === 'neutral' ? '#ffcc00' : '#ff4444';
      if (this.healthElement && this.healthFillElement && this.healthTextElement && entity && entity.maxHp > 0) {
        const pct = Math.max(0, Math.min(1, entity.hp / entity.maxHp));
        this.healthElement.style.display = 'block';
        this.healthFillElement.style.width = `${pct * 100}%`;
        this.healthTextElement.textContent = `${Math.ceil(entity.hp)} / ${entity.maxHp}`;
      } else if (this.healthElement) {
        this.healthElement.style.display = 'none';
      }

      // Set info
      const yawDeg = (dirToYaw(direction) * 180 / Math.PI).toFixed(0);
      this.infoElement.innerHTML = `
        Distance: ${distance.toFixed(1)}m<br>
        Direction: ${prettyVec(flattenXZ(direction).normalize())}<br>
        Bearing: ${yawDeg}°
      `;
    }
  }

  /**
   * Get the raycaster for external use (e.g., debug picking)
   */
  getRaycaster(): THREE.Raycaster {
    return this.raycaster;
  }
}
