const bookByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionaria',
        autor: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilonia',
        autor: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        autor: 'Robert T e Sharon'
      }
    ]
  },
  {
    category: 'Inteligencia Emocional',
    books: [
      {
        title: 'Você é insubstituivel',
        autor: 'Augusto Cury'
      },
      {
        title: 'Ansiedade',
        autor: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos...',
        autor: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCat = bookByCategory.length

for(let cat of bookByCategory){
  console.log('Total de livros da categoria', cat.category)
  console.log(cat.books.length)
}

function contarAutores(){
  let autores = [];

  for(let cat of bookByCategory){
    for(let book of cat.books){
      if(autores.indexOf(book.autor) == -1){
        autores.push(book.autor)
      }
    }
  }

  console.log("Total de Autores: ", autores.length)
}

contarAutores()

function LivroAugust(){
  let books = [];

  for(let cat of bookByCategory){
    for(let book of cat.books){
      if(book.autor === 'Augusto Cury'){
        books.push(book.title)
      }
    }
  }

  console.log("Livros: ", books)
}

LivroAugust()