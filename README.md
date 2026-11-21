# Lab 1 — Variables and Functions

## Tasks Completed

1. I wrote `formatFullName` to capitalize the first letter of each name and return the last name first. It returns `"Invalid name input."` if either name is missing.
2. I wrote `calculateTotalCost` to multiply the price by the quantity and apply tax. It returns `"Invalid input."` if any input is invalid.
3. I wrote `checkEligibility` to check a person's age and employment status and return the message that matches their situation.
4. I added an optional discount to `calculateTotalCost`. If I pass a discount, the function subtracts it before applying tax.

## Run the Lab

From the repository folder, run each file with Node.js.

```bash
node Task1.js
node Task2.js
node Task3.js
node Task4.js
```

## Reflection Questions

### How did you approach creating more flexible functions with parameters?

I gave each function clear parameters so it could work with different inputs. This made it easier to reuse the same function in different situations.

### What challenges did you face while incorporating conditional logic in your functions?

One challenge was thinking through the different cases. I had to check if the inputs were valid and make sure the function returned the right message for each case.

### How does refactoring improve the readability and maintainability of your code?

Refactoring helps me simplify my functions so the code is easier to understand and update later.
