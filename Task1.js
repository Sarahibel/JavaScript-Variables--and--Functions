// // create a function called formatFullName that takes two parameters:

// check if either first name or last name is missing,and return full name in the format LastName and
function formatFullName(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return "Invalid name input.";
  }
  firstName = firstName.trim();
  lastName = lastName.trim();
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }
  //- Capitalize the first letter of firstName and lastName
  let first =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  let last = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  // return the full name in the format lastName ,firstName
  return `${last}, ${first}`;
}
console.log(formatFullName("Sarah", "Ibelhoulen")); // Output: "Ibelhoulen, Sarah"
console.log(formatFullName("Sarah", "")); //Output: "Invalid name input."
console.log(formatFullName("", "ibelhoulen")); //Output; "Invalid name input."
console.log(formatFullName("SARAH", "IBELHOULEN")); // output : "Ibelhoulen, Sarah"
