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
    const weaponToPickup = weapon;

    person.inventory.push(weaponToPickup);
    return person;
}

/**
 * equipWeapon
 */
function equipWeapon(person) {
    const inventoryCount = person.inventory.length;
    const weapon = person.inventory[0]
    if( inventoryCount >= 1){
        person.weapon = weapon;
        return person;
    }
    return person;
}
// When the bag is clicked it will equip the hero with the first item in the inventory array
// TODO: And reassigns the `weapon` property of person to the first element of the person.inventory array
// TODO: If the inventory array of person is empty, the function should do nothing

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
    const weapon = { type: "dagger", damage: 2 };
    hero.inventory.push(weapon);
    // FIXME: pickUpItem(hero, weapon); 
});

document.getElementById("bag").addEventListener("click", function() {
    equipWeapon(hero);
});