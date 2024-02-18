const myLibrary=[];

function Book(name, author){
    this.name=name;
    this.author=author;
};

function addBookToLibrary(name, author){
    book = new Book(name, author)
    myLibrary.push(book)
    
    let cards=document.getElementById("cards");
    let card=document.createElement("div");
    card.id="card";
    card.textContent=book.name+", " + book.author;
    let closeButton = document.createElement("button");
    closeButton.textContent="X";
    
    closeButton.addEventListener("click",()=>{
        card.remove();
        let index=myLibrary.indexOf(book)
        myLibrary.splice(index,1);
    });
    card.append(closeButton);
    cards.append(card);
};


function displayCards(){
    
     myLibrary.forEach((book)=>{
        
     });
     console.log(myLibrary);
    
}

let newBook = document.getElementById("newBook");
newBook.addEventListener("click",()=>{
    let name=prompt("Please state the name of the book");
    let author=prompt("Please state the author of the book");
    addBookToLibrary(name,author);
});
let newBook2 = document.getElementById("newBook2");
let dialog = document.getElementById("addBook");
newBook2.addEventListener("click",()=>{
    dialog.showModal();
})
let submit = document.getElementById("submitButton");
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let bookName=document.getElementById("bookNameInput").value;
    let authorName=document.getElementById("authorNameInput").value;
    addBookToLibrary(bookName,authorName);
    dialog.close();
})

let cancel=document.getElementById("cancelButton");
cancel.addEventListener("click",()=>{
    let bookName=document.getElementById("bookNameInput")
    let authorName=document.getElementById("authorNameInput")
    authorName.value=''
    bookName.value=''
    dialog.close();
})