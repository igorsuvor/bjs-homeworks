'use strict'
// Задача № 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(item => item.name);
}

function getCountReliableWeapons(endurance) {
  return weapons.filter(weapon => weapon.durability > endurance).length;
  }

function hasReliableWeapons(endurance) {
  return weapons.some(item => item.durability > endurance);
  }  
  
function getReliableWeaponsNames(endurance) {
  return weapons.filter(weapon => weapon.durability > endurance).map(item => item.name);
  }

function getTotalDamage() {
  return weapons.reduce((acc, item) => {
    return acc + item.attack;
  }, 0);
}

function getValuestCountToSumValues(arr, sumValue) {
  return arr.reduce((acc, item) => {
    if (sumValue > acc.amount) {
      acc.calc += 1;
      acc.amount += item;
    }
    return acc;
  }, {calc: 0, amount: 0}).calc;
}

// Задача № 2
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.every((value, index) => value === arr2[index]) && arr1.length === arr2.length;
}

function memorize(fn, limit) {
  const memory = [];
    return (...args) => {
      const found = memory.find(item => compareArrays(item.args, args));
        if (found) {
          return found.result;
        }
        if (memory.length > limit) {
          return memory.pop();
        }
          memory.push({ args: args, result: fn(...args) });

    return memory[memory.length - 1].result;
    }
}