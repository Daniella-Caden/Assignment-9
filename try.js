let container= document.querySelector('div.container');


let newCard= document.createElement('div');

let heading= document.createElement('h3');
heading.textContent="My first div";

 let paragraph=document.createElement('p');
 paragraph.textContent= "we are creating a paragraph";

 let picture=document.createElement('img');
 picture.src="Flower.jpg";

 newCard.appendChild(heading);
 newCard.appendChild(paragraph);
 newCard.appendChild(picture);

 container.appendChild(newCard);



 let content= document.querySelector('div.container');


let newC= document.createElement('div');

let head= document.createElement('h3');
head.textContent="My Second div";

 let paragraph2=document.createElement('p');
 paragraph2.textContent= "we are creating a second paragraph";

 let image=document.createElement('img');
 image.src="Rose.jpg";

 newC.appendChild(head);
 newC.appendChild(paragraph2);
 newC.appendChild(image);

 content.appendChild(newC);