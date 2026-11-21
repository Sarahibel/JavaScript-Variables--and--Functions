function calculateTotalCost(price, quantity, taxRate) {
  // Check if price, quantity, and taxRate are valid numbers
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    !isFinite(price) ||
    !isFinite(quantity) ||
    !isFinite(taxRate) ||
    price < 0 ||
    quantity < 0 ||
    taxRate < 0
  ) {
    return "Invalid input.";
  }

  // Calculate the total cost
  const totalCost = price * quantity * (1 + taxRate);
  return totalCost;
}

// Example usage
console.log(calculateTotalCost(100, 3, 0.05)); // Output:315
console.log(calculateTotalCost(40, 3, 0.1)); // Output: 132
console.log(calculateTotalCost(-50, 3, 0.1)); // Output: "Invalid input."
console.log(calculateTotalCost(50, "two", 0.1)); // Output: "Invalid input."
console.log(calculateTotalCost(50, 2, -0.1)); // Output: "Invalid input."
