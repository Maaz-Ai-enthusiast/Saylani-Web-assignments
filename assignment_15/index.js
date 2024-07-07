// interface User {
//     name: string;
//     age: number;
//     email?: string; // optional property
//     greet(): void;
//   }
//   const user: User = {
//     name: 'Maaz',
//     age: 21,
//     greet() {
//       console.log('Hello!');
//     }
//   };
//   console.log("Before Deleting...");
//  console.log(user);
// delete user.name;
//  console.log("after Deleting...");
//  console.log(user);
//  console.log(`length: ${Object.keys(user).length}`);
// interface library{
// author1 : string;
// title1 : string;
// readingStatus1 : boolean;
// } 
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
for (var i in library) {
    console.log(i, library[i]);
}
