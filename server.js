const express = require('express');
const bodyParser = require('body-parser')

let post1= 0 ;
let getPorId = 0;
let getTodosId = 0;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const books = [
    {
        ID: 1,
        name: 'Codigo Da Vinci',
        author: 'Dan Brown'
    },
    {
        ID: 2,
        name: 'Os Lusiadas',
        author: 'Luis de Camoes'
    }
];

app.get('/books', (req, res) => {
    getTodosId++

    res.send(books);
});

app.post('/books', (req, res) => {
    const newBook = req.body; 
    
    post1++;
    
    if (books.findIndex(b => b.ID === newBook.ID) !== -1) {
      return   res.send('Existing book ID');
       
    }

    books.push(newBook); 
    
    res.send('Book added');
});

app.get('/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    
  getPorId++;

    if (isNaN(bookId)) {
        res.status(500).send('Non integer');
        return;
    } 
    

    const book = books.find(b => b.ID === bookId);
    if (!book) {
        res.status(500).send('Invalid book ID');
        return;
    }

    res.send(book);
});

app.get('/logs', (req, res)=>{
    const obj =[
    {
        GetPorId: getPorId, 
        GetTodosId: getTodosId
    },
    {   posts: post1
    }
    ]
    res.send(obj);
})


app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
})