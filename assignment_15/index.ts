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
  

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
// for(const i in library) {

//     console.log(i, library[i]);

// }

function invertObject(obj) {
    let invertedObject = {};

    // Iterate through each key-value pair in the original object
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let originalValue = obj[key];
            invertedObject[originalValue] = key; // Swap key and value
        }
    }

    return invertedObject;
}

// Example usage:
let originalObject = {
    a: 'apple',
    b: 'banana',
    c: 'cherry'
};

let invertedObject = invertObject(originalObject);
console.log('Original Object:', originalObject);
console.log('Inverted Object:', invertedObject);
    