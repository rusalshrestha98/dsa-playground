// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

const validateHello = (greetings) => {
    let words = greetings.toLowerCase().split(" ");
    console.log(words)
    const allGreetings = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    for (i = 0; i < allGreetings.length; i++) {
        if (words.includes(allGreetings[i])) {
            return true;
        }
    }
    return false;
}


console.log(validateHello("viSta hoLA? tScHuss! HOw!"));