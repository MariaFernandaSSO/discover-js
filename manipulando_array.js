let array = [
  "cavalo",
  "pão",
  "ovo"
]

//modificando o array
// adicionar um item no fim
array.push("avocado")
// adicionar no começo
array.unshift("cavalinho")
// remover do fim
//array.pop()
// remover do começo
//array.shift()

// pegar somente alguns elementos do array
// console.log(array.slice(1,3)) // slice - cortar

// remover 1 ou mais items em qualquer posição do array
//array.splice(1, 1)
// encontrar a posição de um elemento no array
let index = array.indexOf('avocado')

// eliminar array respectivo q eu quero
array.splice(index,1)
console.log(array, index)