// let bookArray = [
//   'book_1',
//   'book_2',
//   'book_3',
//   'book_4',
//   'book_5',
//   'book_5',
//   'book_6',
//   'book_7',
//   'book_8',
//   'book_9',
//   'book_10'
// ];

// function createList(Array) {
//   for (let i = 0; i < Array.length; i++) {
//     let ul = document.createElement('ul');
//     ul.id = 'ul-id';
//     document.body.appendChild(ul);
  
//     let li = document.createElement('li');
//     li.id = 'li-id';
//     ul.appendChild(li);
//     li.textContent = Array[i];
//   }
// }

// createList(bookArray);

let bookObject = {
  book_1: { title: 'CSS: The Missing Manual', language: 'English', author: 'David Sawyer McFarland', img: 'https://images-na.ssl-images-amazon.com/images/I/41GlH6s9oiL._SX379_BO1,204,203,200_.jpg' },
  book_2: { title: 'HTML and CSS: Design and Build Websites', language: 'English', author: 'Jon Duckett', img: 'https://images-na.ssl-images-amazon.com/images/I/41R9Qctt%2BbL._SX396_BO1,204,203,200_.jpg' },
  book_3: { title: 'Head First HTML and CSS', language: 'English', author: 'Elisabeth Robson', img: 'https://images-na.ssl-images-amazon.com/images/I/51GbDTGXRvL._SX430_BO1,204,203,200_.jpg' },
  book_4: { title: 'Web UI Design Patterns 2014', language: 'English', author: 'Dominik Pacholczyk', img: 'https://www.uxpin.com/studio/studio/wp-content/uploads/2015/09/unnamed1-262x375.png' },
  book_5: { title: 'Learning Responsive Web Design: A Beginner\'s Guide', language: 'English', author: 'Clarissa Peterson', img: 'https://images-na.ssl-images-amazon.com/images/I/51s033oDldL._SX331_BO1,204,203,200_.jpg' },
  book_6: { title: 'Pro CSS3 Layout Techniques', language: 'English', author: 'Sam Hampton-Smith', img: 'https://images-na.ssl-images-amazon.com/images/I/41M8dMkFUJL._SX348_BO1,204,203,200_.jpg' },
  book_7: { title: 'CSS: The Definitive Guide', language: 'English', author: 'Eric A. Meyer', img: 'https://images-na.ssl-images-amazon.com/images/I/51MfHgeKjAL._SX387_BO1,204,203,200_.jpg' },
  book_8: { title: 'Hello Design World', language: 'English', author: 'Mason Gentry', img: 'https://images-na.ssl-images-amazon.com/images/I/41Qi1HnM2kL.jpg' },
  book_9: { title: 'HTML5 in easy steps', language: 'English', author: 'Mike McGrath', img: 'https://images-na.ssl-images-amazon.com/images/I/518-QUkXUPL._SX403_BO1,204,203,200_.jpg' },
  book_10: { title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', language: 'English', author: 'Lea Verou', img: 'https://images-na.ssl-images-amazon.com/images/I/512aDoMfKVL._SX408_BO1,204,203,200_.jpg' }
}

let homeWork = function createList(Obj) {
  for (let i = 0; i < Object.entries(Obj).length; i++) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    let li = document.createElement('li');
    ul.appendChild(li);

    let h2 = document.createElement('h2');
    li.appendChild(h2);
    h2.textContent = Object.entries(Obj)[i][1].title;

    let h4 = document.createElement('h4');
    li.appendChild(h4);
    h4.textContent = Object.entries(Obj)[i][1].language;

    let h3 = document.createElement('h3');
    li.appendChild(h3);
    h3.textContent = Object.entries(Obj)[i][1].author;

    let img = document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', Object.entries(Obj)[i][1].img);

    // styling page
    // ------------
    document.body.style.display = 'flex';
    document.body.style.flexFlow = 'row wrap';
    document.body.style.justifyContent = 'space-around';
    document.body.style.fontFamily = 'sans-serif';

    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    ul.style.margin = '1rem';
    ul.style.width = '350px';
    ul.style.maxHeight = '450px';
    ul.style.overflow = 'hidden';
    ul.style.border = '1px solid black';

    li.style.display = 'flex';
    li.style.flexDirection = 'column';

    h2.style.margin = '0';
    h2.style.padding = '0.4rem';
    h2.style.fontSize = '1.3rem';

    h3.style.margin = '0';
    h3.style.padding = '0.4rem';
    h3.style.fontSize = '1rem';

    h4.style.margin = '0';
    h4.style.padding = '0.4rem';
    h4.style.fontSize = '0.8rem';

    img.style.objectFit = 'cover';
  }
}

homeWork(bookObject);