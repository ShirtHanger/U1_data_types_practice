/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */

console.log("---------")
console.log("PROMPT 1")
console.log("---------")

let myFavoriteSong = "MF Doom - Red and Gold"
console.log(myFavoriteSong)
console.log(`My favorite song is ${myFavoriteSong}`)

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */


console.log("---------")
console.log("PROMPT 2")
console.log("---------")

let firstJoJo = "Jonathan Joestar"
const secondJoJo = "Joseph Joestar"
let thirdJoJo = "Jotaro Kujo"

console.log(`${firstJoJo} (1868 - 1889)`)
console.log(`${secondJoJo} (1920 - Present)`)
console.log(`${thirdJoJo} (1971 - 2012)`)


/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

console.log("---------")
console.log("PROMPT 3")
console.log("---------")

let funnyNumber = 74

console.log(funnyNumber + 21)
console.log(funnyNumber - 42)
console.log(funnyNumber * 3)
console.log(funnyNumber / 7)
console.log(funnyNumber % 2)





/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */


console.log("---------")
console.log("PROMPT 4")
console.log("---------")

let firstName = "Jolyne"
let lastName = "Cujoh"

fullName = firstName, lastName

console.log(`${fullName} (1992-2012), daughter of ${thirdJoJo}`)


/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array

console.log("---------")
console.log("PROMPT - Arrays")
console.log("---------")

let movies = ["Scarface", "Coming To America", "The Batman", "Marriage Story"]

movies.push("Heat")
movies.unshift("The Killer")
console.log(movies)
movies.splice(2, 0, "Blade") // sara.season figured this one out
// First arguement tells it where to go, second says how many items to remove, third is what to actually add
console.log(movies)



/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */



let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log("---------")
console.log("PROMPT - Retrieve Marty McFly")
console.log("---------")

console.log(array1[2])
console.log(array2[1][1])
console.log(array3[1][1][1][0])


/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];

console.log("---------")
console.log("PROMPT - Retrieve the letter D")
console.log("---------")

console.log(array4[array4.length - 2])

/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

console.log("---------")
console.log("PROMPT - Subprompts")
console.log("---------")

thom.shift("Thom")
thom.unshift("Tom")
console.log(thom)

karolin[1] += 1
console.log(karolin)

cathleen.splice(2, 1, "Gotham City")
console.log(cathleen)

kristyn.pop("Pittsburgh")
kristyn.push("Oakland")
console.log(kristyn)

