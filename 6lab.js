// create a json object variable for a book. The book should have a title, description, author and number of pages
const book = {
  "title": "Les Miserables",
  "author": "Victor Hugo",
  "rating": 4.2,
  "pages": 1463,
  "published": 1987,
};

// print these object property values in your console individually and via the whole book
console.log(book.title);
console.log(book.author);

console.log(book);
// {
//   title: 'Les Miserables',
//   author: 'Victor Hugo',
//   rating: 4.2,
//   pages: 1463,
//   published: 1987
// }

// update the description of the book
book.rating = 2;
book.blurb = `Victor Hugo's tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him. But his attempts to become a respected member of the community are constantly put under threat: by his own conscience, when, owing to a case of mistaken identity, another man is arrested in his place; and by the relentless investigations of the dogged Inspector Javert. It is not simply for himself that Valjean must stay free, however, for he has sworn to protect the baby daughter of Fantine, driven to prostitution by poverty.`;

// create an array of 5 book objects
let mybooks = [
    {
    "title": "Les Miserables",
    "author": "Victor Hugo",
    "rating": 4.2,
    "pages": 1463,
    "published": 1987,
    }, 
    {
    "title": "The God of the Woods",
    "author": "Liz Moore",
    "rating": 4.14,
    "pages": 490,
    "published": 2024,
    }, 
    {
    "title": "Mythos: The Greek Myths Retold",
    "author": "Stephen Fry",
    "rating": 4.26,
    "pages": 416,
    "published": 2017,
    },
];


// Q] How do you reference each property of a specific object in an array?
console.log(mybooks[0].title);

// Q] How do you add an item onto the end of the array list?
mybooks.push(
    {
    "title": "Three Women",
    "author": "Lisa Taddeo",
    "rating": 3.71,
    "pages": 306,
    "published": 2019,
    }
)

// check
console.log(mybooks);