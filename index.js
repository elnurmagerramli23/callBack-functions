const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   

function getNumberOfElements (first) {
    var firstWord = 0;

    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === first) {
            console.log(i);

            firstWord += alphabet[i].length;
        }
    }
    return firstWord;
}
console.log(getNumberOfElements('f'));


