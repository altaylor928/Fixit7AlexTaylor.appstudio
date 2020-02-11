//create variable
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

//make string uppercase
let upperCaseString = quoteString.toUpperCase()
alert(`Upper case string is: ${upperCaseString}`)

//create variable that holds a new string
let authorString = "-Henry Ford"
let completeString = quoteString.concat(authorString)
alert(`The string in quoteString is: ${completeString}`)

//create new variable to hold quote
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
let lowerCaseString = secondQuote.toLowerCase()
alert(`Lower case string is: ${lowerCaseString}`)

//Find the character at the 3rd position of secondQuote
let characterThird = secondQuote.charAt(2)
alert(`The character at location 3 is ${characterThird}`)

//create new variable that removes the string
let findString = secondQuote.slice(35,120)
alert(`${findString}`)