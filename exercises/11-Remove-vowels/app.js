
const rapid = (myString) => {
    let consonants = [];
    for(let position in myString){
        if(['a','e','i','o','u'].includes(myString[position]) == false)
            consonants.push(myString[position].toUpperCase())
    }
    return consonants.join('') //El join sirve para concatenar todos los elementos del array en un solo string,
}                              //separado por lo que le indiquemos dentro del paréntesis, por default las separa con comas.

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));