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

// Parte 1
// 1
const dragonDamage = (dragon) => Math.floor(Math.random() * (dragon.strength -15 + 1) + 15);

// 2
const warriorDamage = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = minDamage * warrior.weaponDmg;
  const damage = Math.floor(Math.random() * ( maxDamage - minDamage + 1) + minDamage);
  return damage;
}

// 3
const mageAction = (mage) => {
  if (mage.mana < 15){
    return {demage: 'Não possui mana suficiente', spentMana: 0}
  }
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const dmg = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return {demage: dmg, spentMana: 15}
}


// Parte 2
const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage(warrior)
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  mageTurn: (mageAction) => {
    const mageObj = mageAction(mage);
    dragon.healthPoints -= mageObj.demage; 
    mage.damage = mageObj.demage;
    mage.mana -= mageObj.spentMana;
  },
  dragonTurn: (dragonDamage) => {
    const dmg = dragonDamage(dragon);
    mage.healthPoints -= dmg;
    warrior.healthPoints -= dmg;
    dragon.damage = dmg;
  },
  showResults: () => battleMembers
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageAction);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showResults());
