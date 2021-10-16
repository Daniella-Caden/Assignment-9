let container= document.querySelector('div.container');


let newCard= document.createElement('div');

let heading= document.createElement('h3');
heading.textContent="My first div";

 let paragraph=document.createElement('p');
 paragraph.textContent= "we are creating";

 newCard.appendChild(heading);
 newCard.appendChild(paragraph);

 container.appendChild(newCard);