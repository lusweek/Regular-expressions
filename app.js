// regular expressions
// g = Global. Alla i hela stringen, annars tar den bara första.
// i = caseincensetive

const lowerCase = /Hello/gi;

const message = "Hello I like to say hello";


// search = ger ett index (en siffra) om vart i stringen du är
// replace = ändrar något till något annat.
// match = tar alla värden och skapar en array till dem

console.log(message.search("I"));
console.log(message.replace(lowerCase, "hi"));
console.log(message.match(lowerCase));

console.log ("=================")

// om username är ! (falsy) får vi värdet message. Annars replacar vi messege mot username
const displayMessege = (username) => {
    const message = "Welcome my friend";
    if (!username){
        console.log(message)
    } else {
        console.log(message.replace(/my friend/, username))
    }
}

displayMessege("") 

console.log("==============")


// regular expression test method

const aRegExp = /Hello/

const aString = "Hello there!";

console.log (aRegExp.test(aString)); 
console.log (aRegExp.test("hej")); 



console.log("==============")

//Ett till exempel på Regulan expresion. 
// /@/.test(email) = ser om det finns ett @ i testEmail.
const testEmail = (email) => {
    if(/@/.test(email)) {
        console.log("Valid")
    } else {
        console.log("Not Valid")
    }
}; 

testEmail("<ökmflsdnf@")


console.log("==============")

//Felhantering

const checkSomething = (something) => {
    try {
        console.log(something)
    } catch (error) {
        console.log(error)
    }
};

checkSomething(123)


//om numbers inte är av datatypen nummer 

console.log("==============")

const onlyNumbers = (numbers) => {
    try {
        if(typeof numbers != "number"){
             throw "Inte ett nummer"
        } else console.log("That's a number")

    } catch (error) {
        console.log(error)
    }
}

onlyNumbers(3)


// /\S+@\S+\./ 

const isAnEmail = (email) => {
    try {
        if (/@/.test(email)) {
            console.log("You'r Email is valid")
        } else {
            throw "Not a valid email!"
        }
    } catch (error) {
        console.log(error)
    }
}

isAnEmail("he.j@")


const GlobalVarible = "Global"

const logLocalVar = () => {
    const localVarible = "Local"
    console.log(localVarible);
}

for(let i =  0; i < 5; i++) {
    const blockVarible = "block"
    console.log(blockVarible)
}


// Timing 

// Run code once ater a time 

setTimeout(function () {
    console.log("yoyooo");
},2000 );


// Kör kod om och om igen

setInterval(() => {
    console.log("Whassuuups")
}, 10000);


let myInterval = setInterval(() =>{
    console.log("my Intervall");
}, 500); 

const stopInterval = () => {
    clearInterval(myInterval);
}