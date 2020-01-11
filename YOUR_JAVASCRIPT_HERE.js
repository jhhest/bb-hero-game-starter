/**
 * Hero Object
 */

const hero = {
  name: "Super hero Jan van Hest",
  heroic: true,
  inventory: [
    { type: "sword", damage: 5 },
    { type: "axe", damage: 10 }
  ],
  health: 10,
  weapon: {
    type: "Dagger",
    damage: 2
  }
};

const weapon = { type: "dagger", damage: 2 }; // FIXME: Is this okey to do?

/**
 * Game Logic functions.
 *
 * askName()
 * rest()
 * pickupItem()
 * equipWeapon()
 */

function askName(person) {
    const name = prompt("What is your name? ");
    person.name = name;
    return person;
}

askName(hero);

/**
 * rest()
 */
function rest(person) {
  const healthValue = person.health;
  if (healthValue === 10) {
    // FIXME: changed person.health to healtValue to make code more readable.
    window.alert("Your health is already at the value of 10");
  }
  person.health = 10;
  return person;
}

/**
 * pickupItem()
 */
function pickUpItem(person, weapon) {
  const weaponToPickup = weapon;
  person.inventory.push(weaponToPickup);
  displayStats();
  return person;
}

/**
 * equipWeapon
 */
function equipWeapon(person) {
  const inventoryCount = person.inventory.length;
  const weapon = person.inventory[0];
  if (inventoryCount >= 1) {
    person.weapon = weapon;
    return person;
  }
  return person;
}

/**
 * UI and UI events.
 */

// When clicked will reset the `health` property on the hero global variable to 10
// FIXME: Did not work: document.getElementById("inn").addEventListener("click", rest(hero));
document.getElementById("inn").addEventListener("click", function() {
  rest(hero);
});

// When the dagger is clicked it will add a weapon object to the inventory array with `type`: `dagger` and `damage`: 2
document.getElementById("dagger").addEventListener("click", function() {
  pickUpItem(hero, weapon);
});

document.getElementById("bag").addEventListener("click", function() {
  equipWeapon(hero);
});

displayStats();
/**
 * displayStats
 */
function displayStats() {
  const statsSection = document.getElementById("stats");
  statsSection.innerHTML = "";
  statsSection.appendChild(generateStats());
}

/**
 * generateStats()
 */

function generateStats() {
  const name = hero.name;
  const nameElement = document.createElement("li");
  nameElement.innerHTML = `Name: ${name}`;

  const health = hero.health;
  const healthElement = document.createElement("li");
  healthElement.innerHTML = `Health: ${health}HP`;

  const weaponType = hero.weapon.type;
  const weaponTypeElement = document.createElement("li");
  weaponTypeElement.innerHTML = `Weapon: ${weaponType}`;

  const weaponDamage = hero.weapon.damage;
  const weaponDamageElement = document.createElement("li");
  weaponDamageElement.innerHTML = `Weapon damage: ${weaponDamage}`;

  const heroInventory = hero.inventory.map(item => item.type).join(", ");
  const inventoryElement = document.createElement("li");
  inventoryElement.innerHTML = `Inventory: ${heroInventory}`;

  const htmlStatisticsElement = document.createElement("ul");
  htmlStatisticsElement.appendChild(nameElement);
  htmlStatisticsElement.appendChild(healthElement);
  htmlStatisticsElement.appendChild(weaponTypeElement);
  htmlStatisticsElement.appendChild(weaponDamageElement);
  htmlStatisticsElement.appendChild(inventoryElement);

  return htmlStatisticsElement;
}

/*
TODO:- A player can choose their own name
- Allow people to change the name of their hero, you can use window.prompt or use an input element. Be careful using a form because using a form might refresh the page.
TODO:- Make it possible to fight enemies
- Implement fighting an enemy. (how you do it is up to you!)
- When an enemy or weapon gets clicked it gets deleted from the page




*/
