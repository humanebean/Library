const myLibrary=[];

function Book(name, author){
    this.name=name;
    this.author=author;
};

function addBookToLibrary(name, author){
    book = new Book(name, author)
    myLibrary.push(book)
};

let newBook = document.getElementById("newBook");
newBook.addEventListener("click",()=>{
    let name=prompt("Please state the name of the book");
    let author=prompt("Please state the author of the book");
    addBookToLibrary(name,author)
});

console.log(myLibrary);