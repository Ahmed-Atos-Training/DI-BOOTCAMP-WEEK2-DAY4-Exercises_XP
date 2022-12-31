// Instructions


// Create a function call isDivisible() that takes no parameter.

/**
 * Definition of the function isDivisible() without parameter
 * 
 * This function check is number between 0 and 500 is  divisible by 23 
 */

function isDivisible(){

    let sum = 0;
    let Outcome = 'Outcome : ';

    // loop through numbers 0 to 500.
    for (let number = 0; number <= 500; number++) {
        
        // Check if number is divisible by 23 
        if (number % 23 == 0) {
            sum += number;
            Outcome = Outcome + " " + number + " ";
        }
        
    }

    //  all the numbers divisible by 23.
    console.log(` ${Outcome} \n`);

    // the sum of all numbers that are divisible by 23
    console.log(`Sum : ${sum}`);
}

// run function
isDivisible();



// Bonus: Add a parameter divisor to the function.


/**
 * Definition of the function isDivisible() with number in parameter
 * 
 * This function check is number between 0 and 500 is  divisible by 23 
 * @param {Number} divider
 * @returns {String}
 */

function isDivisible2(divider){

    if(isNaN(divider))
    {
        return console.log("Veuillez entrer un nombre");
    }
    let sum = 0;
    let Outcome = 'Outcome : ';

    // loop through numbers 0 to 500.
    for (let number = 0; number <= 500; number++) {
        
        // Check if number is divisible by 23 
        if (number % divider == 0) {
            sum += number;
            Outcome = Outcome + " " + number + " ";
        }
        
    }

    //  all the numbers divisible by 23.
    console.log(` ${Outcome} \n`);

    // the sum of all numbers that are divisible by 23
    console.log(`Sum : ${sum}`);
}


//run function with 3 in parameter
isDivisible2(3);

//run function with 45 in parameter
isDivisible2(45);