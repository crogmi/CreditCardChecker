// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validatecred(arr) {
  // Establish the length to check every other digit and the accumulator
  const length = arr.length - 1;
  let sum = 0;
  // Iterate through arr 
  for (let i = arr.length - 1; i >= 0; i--) {
        // Check index position relative to the check digit
        // If index position is even numbers away from check digit, add the digit
        if (length % 2 === i % 2) {
            sum += arr[i];
        } else {
        // If index position is odd numbers away from the check digit, add the digit * 2, unless the figure is above 9, then add (digit * 2) - 9
            let temp = arr[i] * 2;
            if (temp > 9) {
                sum += temp - 9;
            } else {
                sum += temp;
          }
      }
  }
  // Return true if sum modulo 10 is 0
  return sum % 10 === 0 ? true : false;
}

// Check functionality of validatecred
console.log(validatecred(valid1)); // Should print true
console.log(validatecred(invalid1)); // Should print false


function findInvalidCards(arr) {
    // Filters nested array using validatecred function
    return arr.filter(x => !validatecred(x));
}

//Check functionality of findInvalidCards
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Should not print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all 5 credit cards


function idInvalidCardCompanies(invalid) {
    const company = {
        3: 'Amex (American Express)',
        4: 'Visa',
        5: 'Mastercard',
        6: 'Discover'
    }
    const arr = invalid.map(x => company[x[0]]);
    return [...new Set(arr)];
}

//Check functionality of idInvalidCardCompanies
console.log(idInvalidCardCompanies(findInvalidCards([valid1, valid2, valid3, valid4, valid5]))); // Should not print anything
console.log(idInvalidCardCompanies(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5]))) // Should print one of each company

// To update with function to correct invalid credit cards
function correct () {

}

