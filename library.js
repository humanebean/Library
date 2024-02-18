const myLibrary=[];

function Book(name, author,pageCount){
    this.name=name;
    this.author=author;
    this.pageCount=pageCount;
};

function addBookToLibrary(name, author,pageCount){
    book = new Book(name, author,pageCount)
    myLibrary.push(book)
    
    let cards=document.getElementById("cards");
    let card=document.createElement("div");
    card.id="card";
    card.textContent="Title: " + book.name + "\n" + "Author: " + book.author + '\n' + "Page Count: " + book.pageCount;
    let closeButton = document.createElement("button");
    closeButton.textContent="X";
    closeButton.id="closeButton";
    let checkboxContainer=document.createElement("div");
    checkboxContainer.id="checkBoxContainer";
    let read=document.createElement("input");
    read.type="checkbox";
    read.id="slider";
    checkboxContainer.append(read);
    let readLabel=document.createElement("label");
    readLabel.textContent="Finished";
    readLabel.id="slider";
    checkboxContainer.append(readLabel);

    
    closeButton.addEventListener("click",()=>{
        card.remove();
        let index=myLibrary.indexOf(book)
        myLibrary.splice(index,1);
    });
    card.append(closeButton);
    card.append(checkboxContainer);
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
    let pageCount=document.getElementById("pageCountInput").value;
    addBookToLibrary(bookName,authorName,pageCount);
    let myForm=document.getElementById("myForm");
    myForm.reset();
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