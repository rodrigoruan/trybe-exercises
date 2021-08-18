const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let maxDragonDamage = Math.round(Math.random() * dragon.strength);
  return maxDragonDamage < 15 ? 15 : maxDragonDamage;
};

const warriorDamage = () => {
  let maxWarriorDamage = Math.round(
    Math.random() * (warrior.strength * warrior.weaponDmg)
  );
  return maxWarriorDamage < warrior.strength
    ? warrior.strength
    : maxWarriorDamage;
};

const mageDamage = () =>
  Math.round(
    Math.random() * (mage.intelligence * 2 - mage.intelligence) +
      mage.intelligence
  );

const mageSpells = () => {
  return {
    damage: mageDamage(),
    mana: mage.mana < 15 ? 'Não possuí mana suficiente' : (mage.mana -= 15),
  };
};

//  PARTE ||

const gameActions = {
  warriorTurn: (param) => {
    let finalDamage = param();
    warrior.damage = finalDamage;
    dragon.healthPoints -= finalDamage;
  },
  mageTurn: (param) => {
    let finalDamage = param();
    mage.damage = finalDamage.damage;
    dragon.healthPoints -= finalDamage.damage;
  },
  dragonTurn: (param) => {
    let finalDamage = param();
    mage.healthPoints -= finalDamage;
    warrior.healthPoints -= finalDamage;
    dragon.damage = finalDamage;
  },
  finalResult: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageSpells);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.finalResult());
