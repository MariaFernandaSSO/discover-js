// transformar string em numero e vice versa
let a = "234"

let num = 234
String(num)
console.log(String(num), Number(a))

// contando caracteres
let p = "amamamama"
console.log(p.length)

// transformar com 2 casas decimais
let numero = 1239482.2344
console.log(numero.toFixed(2)) // 2 casas decimais

// letras minusculas pra maisculas
let word = "Gosto de pão"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

// separando um texto q contem espaços
let frase1 = "Um dia novo"
let array1 = frase1.split(" ") // o .split separa, no caso, por espaços 
console.log(array1)

let frase1t = array1.join("-") // o método join junta tudo
console.log(frase1t)


// verificar se um texto tem uma palavra especifica

let frase2 = "Bom dia"
console.log(frase2.includes("dia")) // retorna true, pois tem 'dia' na frase2

// manipulando array - transformando uma cadeia de caracteres em um array
let word2 = "cavalo"
console.log(Array.from(word2))