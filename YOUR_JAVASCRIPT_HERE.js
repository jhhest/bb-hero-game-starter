// Hero Object.
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

// Game Logic functions.

// Person is a placeholder for the Hero object.
function rest(person) {
    if(person.health === 10){
        window.alert("Your health is already at the value of 10");
    }
  person.health = 10;
  return person;
}
function pickUpItem() {
  return null;
}
function equipWeapon() {
  return null;
}
