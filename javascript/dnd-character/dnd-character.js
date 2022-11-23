//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const abilityModifier = (constitution) => {
  if(constitution < 3) {
    throw new Error('Ability scores must be at least 3');
  } else if(constitution > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((constitution - 10) / 2)
}

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    let dices = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1)
    .sort((a, b) => a - b);
    return dices.slice(1).reduce((sum, current) => sum + current);
  }

}
