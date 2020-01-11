/**
 * Hero Object
 */

const hero = {
  name: "Super hero Jan van Hest",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "Dagger",
    damage: 2
  }
};

// When clicked will reset the `health` property on the hero global variable to 10
document.getElementById("inn").addEventListener("click", function() {
  hero.health = 10;
});

// When the dagger is clicked it will add a weapon object to the inventory array with `type`: `dagger` and `damage`: 2
document.getElementById("dagger").addEventListener("click", function() {
    const weapon = { type: "dagger", damage: 2 };
    hero.inventory.push(weapon);
});

/**
 * Game Logic functions.
 *
 * rest()
 * pickupItem()
 * equipWeapon()
 */

/**
 * rest()
 */
function rest(person) {
  if (person.health === 10) {
    window.alert("Your health is already at the value of 10");
  }
  console.log("Rest(): Set healt to 10");
  person.health = 10;
  console.log("Rest() -> Check if health is 10:", person.health);
  return person;
}

/**
 * pickupItem()
 */
function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
  return null;
}

/**
 * equipWeapon
 */
function equipWeapon() {
  return null;
}
