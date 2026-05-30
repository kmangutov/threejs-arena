import { describe, expect, it } from 'vitest';
import {
  ATTACK_DURATION,
  FLINCH_DURATION,
  GRAZE_DURATION,
  actionPulse,
  grazeCycle,
  makeAnimalActionState,
  tickAnimalActions,
  triggerAttack,
  triggerFlinch,
  triggerGraze,
} from '../procedural-animal-visuals';

describe('procedural animal action timers', () => {
  it('starts idle and triggers every supported action', () => {
    const actions = makeAnimalActionState();
    expect(actions).toEqual({ flinchTimer: 0, attackTimer: 0, grazeTimer: 0 });

    triggerFlinch(actions);
    triggerAttack(actions);
    triggerGraze(actions);
    expect(actions).toEqual({
      flinchTimer: FLINCH_DURATION,
      attackTimer: ATTACK_DURATION,
      grazeTimer: GRAZE_DURATION,
    });
  });

  it('ticks timers down without crossing below zero', () => {
    const actions = makeAnimalActionState();
    triggerFlinch(actions);
    triggerAttack(actions);
    triggerGraze(actions);

    tickAnimalActions(actions, GRAZE_DURATION + 1);
    expect(actions).toEqual({ flinchTimer: 0, attackTimer: 0, grazeTimer: 0 });
  });

  it('provides bounded animation pulses', () => {
    expect(actionPulse(0, ATTACK_DURATION)).toBe(0);
    expect(actionPulse(ATTACK_DURATION / 2, ATTACK_DURATION)).toBeCloseTo(1);
    expect(grazeCycle(0)).toBe(0);
    expect(grazeCycle(GRAZE_DURATION * 0.5)).toBeGreaterThanOrEqual(0.5);
    expect(grazeCycle(GRAZE_DURATION * 0.5)).toBeLessThanOrEqual(1);
  });
});
