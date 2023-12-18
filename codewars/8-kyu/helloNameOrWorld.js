// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

const hello = (name) => {
    if (!name) return "Hello, World!";

    let arrOfLetters = name.toLowerCase().split('');
    const firstLetter = arrOfLetters.shift().toUpperCase();
    arrOfLetters.unshift(firstLetter);
    return "Hello, " + arrOfLetters.join('') + "!";
}

const helloTwo = (name) => {
    if (!name) return "Hello, World!";
    return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
}

function helloThree(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
  }

console.log(hello())
console.log(hello("johN"))