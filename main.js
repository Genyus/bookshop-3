// create an array of objects
const books =[{
    
    name:`Queenie`,
    author: `by Candice Carty-Williams`,  
    price: 0.99,
    image:'http://books.google.com/books/content?id=NhBmDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api'
},
{
    name:`Ghana Must Go`,
    author: 'taiye selasi',
    price: 2.99,
    image:'http://books.google.com/books/content?id=9j4JGEkCA5cC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api',
},
{
  name:'The Girl Who Smiled Beads',
  author: 'Clemantine Wamariya',
  price: 3.99,
 image: 'http://books.google.com/books/content?id=djc_DwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api',
},
 {
    name:'What We Lose',
    author: 'Zinzi Clemmons',
    price: 2.99,
    image:'http://books.google.com/books/content?id=NWrpDQAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api',
   },
   {
    name: 'The Good Lord Bird',
    author: 'James McBride',
    price: 8.38,
    image:'http://books.google.com/books/content?id=BnudfIm9NMUC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api',
   },
    
   {
    name:'Ordinary Light',
    author: 'John S. Green',
    price: 3.83,
    image:'http://books.google.com/books/content?id=xeHGDgAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api',
   },
   {
    name:'The Water Dancer',
    author: 'Ta-Nehisi Coates',
    price: 6.99,
    image:'http://books.google.com/books/content?id=f2KMDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api',
   },
   

];

function displayBooks (booklist) {
    const bookstore = document.querySelector('#bookstore');
    booklist.forEach(book => {
        const listItem = document.createElement('li');
        const text = document.createTextNode(book.name);
        const author = document.createTextNode(book.author);
        const image = document.createElement('img');
        image.src = book.image;


        listItem.appendChild(text);
        listItem.appendChild(author);
        listItem.appendChild(image);

    bookstore.appendChild(listItem);

    });
} 





