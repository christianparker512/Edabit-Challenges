/*A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
shouldServeDrinks(17, true) ➞ false
shouldServeDrinks(19, false) ➞ true
shouldServeDrinks(30, true) ➞ false*/

function shouldServeDrinks(age, onBreak) {
    return age >= 18 && !onBreak;
}

console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));
