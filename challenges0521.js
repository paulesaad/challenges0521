// write a method names() 
// which takes a string of
// comma-separated names 
// (first and last) and then 
// returns an object where each
// firstname is a key, and each 
// lastname is a value
// 
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

function names(str) {
	str.split(',').reduce(function(a, v){
		var secspl = v.trim().split(' ')
		a.secspl[0] = secspl[1]
		return a
	}{})
}

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")


// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
// 
// Palindromes are words that are the same
// going forwards and backwards. Examples:
// 
// i
// dod
// meeteem
// TrickirT

function isPalindrome(srt){
	return (str === str.split('').reverse().join(''))
}

// tests

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )



// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use metaprogramming
// instead of an if/else statement to return
// the hex.

// function spanishColor(colorName) {
//     if (colorName.toLowerCase() === "rojo") {
//         return "#ff0000"
//     } else if (colorName.toLowerCase() === "blanco") {
//         return "#ffffff"
//     } else if (colorName.toLowerCase() === "azul") {
//         return "#0000ff"
//     } else if (colorName.toLowerCase() === "verde") {
//         return "#00ff00"
//     } else if (colorName.toLowerCase() === "negro") {
//         return "#000000"
//     }
// }

function spanishColor(colorName) {
	var data = {
		rojo:"#ff0000",
		blanco:"#ffffff",
		azul:"#0000ff",
		verde:"#00ff00",
		negro:"#000000"
	}

	return data[colorName.toLowerCase()] ||  "That Spanish is too advanced for me."
}

console.assert(spanishColor('rojo') === '#ff0000')
console.assert(spanishColor('blanco') === '#ffffff')
console.assert(spanishColor('verde') === '#00ff00')


// Array.forEach(callback) passes 
// (value, index, array) to the 
// callback each iteration
// 
// i.e.
// 
// function log(v, i){
//      console.log(v, i)
// }
// 
// ['a', 'b', 'c'].forEach(log)
// 
// --> a, 0
// --> b, 1
// --> c, 2
// 
// Write a function forEach(array, callback)
// that takes an array and callback function,
// and passes each (value, index, array) to
// the callback

function forEach(array, callback){
    for (var i=0; i<array.length; i++){
    	callback(array[i], i, arr)
    }
}

// tests
function IHazValue(value, index, array){
    console.assert(typeof value !== "undefined")
}
forEach([1, 2, 3], IHazValue)

function IHazIndex(value, index, array){
    console.assert(typeof index === "number")
}
forEach([1, 2, 3], IHazIndex)

function IHazArray(value, index, array){
    console.assert(array instanceof Array)
}
forEach([1, 2, 3], IHazArray)