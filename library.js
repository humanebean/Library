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
