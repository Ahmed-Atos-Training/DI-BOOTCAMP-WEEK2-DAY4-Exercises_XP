# What We Will Learn:


1. Variables
2. Conditionals
3. Loops
4. Functions


----------


## ð Exercise 1 : Information

### Instructions


**Part I** : function with no parameters

1. Create a function called `infoAboutMe()` that takes no parameter.
2. The function should console.log a sentence about you (ie. your name, age, hobbies ectâ¦).
3. Call the function.


**Part II** : function with three parameters

1. Create a function called `infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.`
2. The function should console.log a sentence about the person (ie. âYou name is â¦, you are .. years old, your favorite color is â¦â)
3. Call the function twice with the following arguments:
    `infoAboutPerson("David", 45, "blue")`
    `infoAboutPerson("Josh", 12, "yellow")`



----------


## ð Exercise 2 : Tips

### Instructions

John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

1. Create a function named `calculateTip()` that takes no parameter.

2. Inside the function, use `prompt` to ask John for the amount of the bill.

3. Here are the rules
    * If the bill is less than $50, tip 20%.
    * If the bill is between $50 and $200, tip 15%.
    * If the bill is more than $200, tip 10%.

4. Console.log the tip amount and the final bill (bill + tip).

5. Call the `calculateTip()` function.


----------


## ð Exercise 3 : Find The Numbers Divisible By 23


### Instructions


1. Create a function call isDivisible() that takes no parameter.

2. In the function, loop through numbers 0 to 500.

3. Console.log all the numbers divisible by 23.

4. At the end, console.log the sum of all numbers that are divisible by 23.

```
Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313
```

5. **Bonus**: Add a parameter **divisor** to the function.

```
isDivisible(divisor)

Example:
isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
```


----------


## ð Exercise 4 : Shopping List


### Instructions

```
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
```

1. Add the `stock` and `prices` objects to your js file.

2. Create an array called `shoppingList` with the following items: âbananaâ, âorangeâ, and âappleâ. It means that you have 1 banana, 1 orange and 1 apple in your cart.

3. Create a function called `myBill()` that takes no parameters.

4. The function should return the total price of your `shoppingList`. In order to do this you must follow these rules:
    1. The item must be in stock. (Hint : check out if .. in)
    2. If the item is in stock find out the price in the prices object.

5. Call the `myBill()` function.

6. **Bonus**: If the item is in stock, decrease the itemâs stock by 1



----------


## Exercise 5 : Whatâs In My Wallet ?

### Instructions


**Note**: Read the illustration (point 4), while reading the instructions

1. Create a function named `changeEnough(itemPrice, amountOfChange)` that receives two arguments : 
    * an item price
    * and an array representing the amount of change in your pocket.

2. In the function, determine whether or not you can afford the item.
    * If the sum of the change is bigger or equal than the itemâs price (ie. it means that you can afford the item), the function should **return** `true`
    * If the sum of the change is smaller than the itemâs price (ie. it means that you cannot afford the item) the function should **return** `false`

3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

```
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01
```

4. To illustrate:

After you created the function, invoke it like this:

```
changeEnough(4.25, [25, 20, 5, 0])
```

    * The value `4.25` represents the itemâs price
    * The array `[25, 20, 5, 0]` represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
    * The function should return `true`, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you `6.25 + 2 + .25 + 0 = 8.50` which is bigger than 4.25 (the total amount due)


Examples
```
changeEnough(14.11, [2,100,0,0]) => returns false
changeEnough(0.75, [0,0,20,5]) => returns true
```

----------


## ð Exercise 6 : Vacations Costs


### Instructions

Letâs create functions that calculate your vacationâs costs:

1. Define a function called `hotelCost()`.
    * It should ask the user for the number of nights they would like to stay in the hotel.
    * If the user doesnât answer or if the answer is not a number, ask again.
    * The hotel costs $140 per night. The function should return the total price of the hotel.

2. Define a function called `planeRideCost()`.
    * It should ask the user for their destination.
    * If the user doesnât answer or if the answer is not a string, ask again.
    * The function should `return` a different price depending on the location.
        * âLondonâ: 183$
        * âParisâ : 220$
        * All other destination : 300$

3. Define a function called `rentalCarCost()`.
    * It should ask the user for the number of days they would like to rent the car.
    * If the user doesnât answer or if the answer is not a number, ask again.
    * Calculate the cost to rent the car. The car costs $40 everyday.
        * If the user rents a car for more than 10 days, they get a 5% discount.
    * The function should `return` the total price of the car rental.

4. Define a function called `totalVacationCost()` that returns the total cost of the userâs vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
**Hint**: You have to call the functions `hotelCost()`, `planeRideCost()` and `rentalCarCost()` inside the function `totalVacationCost()`.

5. Call the function `totalVacationCost()`

6. **Bonus**: Instead of using a `prompt` inside the 3 first functions, only use a prompt inside the `totalVacationCost()` function. You need to change the 3 first functions, accordingly.