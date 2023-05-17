// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.




// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe('takes in array and removes first val and shuffles remaining content', () => {
  it("removes first item from array and shuffles remaining items", () => {
    expect(shuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
    expect(shuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
  });
});

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.



// Pseudo Code:
// Method: I created a function that removes the first value using the .shift method.
// For: Using a for loop we tell our program to iterate through array from last index, inside the loop we create a random integer ans we swap the elements which will shuffle the remaining colorss


const  shuffler = (array) => {
  array.shift();
  for (let i = array.length - 1; i > 0; i--) {
    //needed assistance from classmates at this part//
    const x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]];
  }

  return array;
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe('tests to see total votes',() => {
  it("subtracts down votes from Up votes",() => {
    expect(voteCounter(votes1).toEqual(11))
    expect(voteCounter(votes2).toEqual(-31))
  })
})

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo Code: 
// Method: I created a function that passes votes as a parameter and returns the down votes subtracted from the up votes. Using console log we print the info into the terminal. 

const voteCounter = (votes) => {
  return votes.upVotes - votes.downVotes
}
console.log(voteCounter(votes1))

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('adds two arrays and leaves no dupliates', () => {
  it("adds two arrays and removes all duplicates", () => {
    expect(duplicateChecker).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"
    ])
  })
})

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Pseudo Code: 
// Method: creating a new constant called duplicateChecker to add two arrays and remove all duplicate instances. 
// Spread Operator: The spread operator (...) can take arrays and concatenate them together while removing all duplicate objects automatically. It then creates a new array with the desired outcome. 

const duplicateChecker = [new Set([...dataTypesArray1, ...dataTypesArray2])]
console.log(duplicateChecker)