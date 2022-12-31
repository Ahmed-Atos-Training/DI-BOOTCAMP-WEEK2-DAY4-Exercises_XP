// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
/**
 * Definition of the function infoAboutMe
 * 
 * This function return your name, age, hobbies ect…
 * 
 * @return {String}
 */
function infoAboutMe()
{
    // Show sentence about you
    return console.log('My name is Ahmed KONE. My hobbies are learning and discovery');
}


// Call the function.
infoAboutMe()


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
/**
 * Definition of the function infoAboutPerson with show name, age, favorite color
 * 
 * @param {String} personName
 * @param {Number} personAge
 * @param {String} personFavoriteColor
 * @returns {String}
 */
function infoAboutPerson(personName, personAge, personFavoriteColor){

    // Show sentence about the person
    return console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}”`);
}

// Call the function twice with the following arguments
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")