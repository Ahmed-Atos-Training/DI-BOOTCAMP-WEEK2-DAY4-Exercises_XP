
/**
 * This function allows you to make a calculation to know if you can buy or not
 * 
 * @param {Number} itemPrice 
 * @param {[quarters:Number, dimes:Number,nickel:Number,penny:Number ]} amountOfChange 
 */
function changeEnough(itemPrice, amountOfChange){

    const listOfCoefficients = [0.25, 0.10, 0.05, 0.01];

    let newPrice = 0;

    // Verifier si amountOfChange est un array et a la meme taille que listOfCoefficients
    if(Array.isArray(amountOfChange)  && listOfCoefficients.length != amountOfChange.length)
    {
        return console.log(`Veuillez fournir tableau de ${listOfCoefficients.length} montant`);
    }

    for (let elt = 0; elt<amountOfChange.length; elt++ ) {
        
        // recuperer le prix;
        let price =  Number(amountOfChange[elt]);

        //Verifier si l'element est un nombre sinon on l'attribue 0
        if (isNaN(price)) {
            price = 0;            
        }

        // Calcul du prix avec les coefficients
        newPrice = newPrice +  price * listOfCoefficients[elt];

   }

   if (itemPrice <= newPrice) {
        return console.log(true);
   }else{
    return  console.log(false); 
   }
}


// Run function
changeEnough(14.11, [2,100,0,0]);

changeEnough(0.75, [0,0,20,5]);