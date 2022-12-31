/*
1- Define a function called hotelCost().
    * It should ask the user for the number of nights they would like to stay in the hotel.
    * If the user doesn’t answer or if the answer is not a number, ask again.
    * The hotel costs $140 per night. The function should return the total price of the hotel.
*/

/**
 * Cette fonction retourne le cout du sejour
 */
function hotelCost(){
    
    const costs = 140;
    let numberOfNights = undefined;

    do {
         numberOfNights = prompt('Nombre de nuité : ');
    } while (isNaN(numberOfNights));

    return console.log(`\n The hotel cost : ${Number(numberOfNights) * costs} \n`);
}


/*
2. Define a function called planeRideCost().
    * It should ask the user for their destination.
    * If the user doesn’t answer or if the answer is not a string, ask again.
    * The function should return a different price depending on the location.
        * “London”: 183$
        * “Paris” : 220$
        * All other destination : 300$
*/

/**
 * Cette function retourne le cout du sejour pour une destination connu; sinon un cout pour les destinations inconnues
 */
function planeRideCost(){

    let destinations = {"London": 183, "Paris":220}
    let destination = undefined;
    let checker = true;

    do {
        destination = prompt('Votre destnation : ');
        let removeSpace = destination.trim();

        if(removeSpace.length > 0 && isNaN(removeSpace)){
            checker = false;
        }
    } while (checker);

    if (destinations[destination]) {
        return console.log(`\n the hotel cost: ${destinations[destination]}$ \n`);
    } else {
        return console.log(`\n The plane tickets cost : ${destination}$ \n`);
    }

}


/*
3. Define a function called rentalCarCost().
    * It should ask the user for the number of days they would like to rent the car.
    * If the user doesn’t answer or if the answer is not a number, ask again.
    * Calculate the cost to rent the car. The car costs $40 everyday.
        * If the user rents a car for more than 10 days, they get a 5% discount.
    * The function should return the total price of the car rental.
*/
/**
 * Cette fonction retourne le prix de la location de voiture.
 */
function rentalCarCost(){

    const costs = 40;
    let numberOfDays = undefined;
    let result = 0;

    do {
        numberOfDays = prompt('Nombre de jours : ');
    } while (isNaN(numberOfDays));

    result = numberOfDays * costs;
    if (numberOfDays > 10) {
        result -= result * 0.05;
    }

    return console.log(`\n The car cost : ${result}$ \n`);
}

/*
4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
*/

function totalVacationCost(){
    hotelCost();
    planeRideCost();
    rentalCarCost();
}

totalVacationCost()