// ## Level 3

// ---

// Normalize the following object to an array of objects.

// **Input:**

// ```
// {
//   liked: [
//     { id: 1, name: "John Doe", age: 20 },
//     { id: 2, name: "Jane Doe", age: 30 },
//     { id: 3, name: "John Smith", age: 40 }
//   ],
//   disliked: [
//     { id: 4, name: "Jason Doe", age: 20 },
//     { id: 5, name: "Josh Doe", age: 30 },
//     { id: 6, name: "Karen Smith", age: 40 }
//   ],
//   loved: [
//     { id: 7, name: "Jasmine Doe", age: 20 },
//     { id: 8, name: "Bob Doe", age: 30 },
//     { id: 9, name: "Tom Smith", age: 40 }
//   ]
// }
// ```

// **Output:**

// ```
// [
//   { id: 1, name: "John Doe", age: 20, reaction: 'liked' },
//   { id: 2, name: "Jane Doe", age: 30, reaction: 'liked' },
//   { id: 3, name: "John Smith", age: 40, reaction: 'liked' },
//   { id: 4, name: "Jason Doe", age: 20, reaction: 'disliked' },
//   { id: 5, name: "Josh Doe", age: 30, reaction: 'disliked' },
//   { id: 6, name: "Karen Smith", age: 40, reaction: 'disliked' },
//   { id: 7, name: "Jasmine Doe", age: 20, reaction: 'loved' },
//   { id: 8, name: "Bob Doe", age: 30, reaction: 'loved' },
//   { id: 9, name: "Tom Smith", age: 40, reaction: 'loved' }
// ]
// ```
let obj_details= {
      liked: [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 30 },
        { id: 3, name: "John Smith", age: 40 }
      ],
      disliked: [
        { id: 4, name: "Jason Doe", age: 20 },
        { id: 5, name: "Josh Doe", age: 30 },
        { id: 6, name: "Karen Smith", age: 40 }
      ],
      loved: [
        { id: 7, name: "Jasmine Doe", age: 20 },
        { id: 8, name: "Bob Doe", age: 30 },
        { id: 9, name: "Tom Smith", age: 40 }
      ]
    };
    function convert(obj_details)
    {
let arr_details=[];
for(let k in obj_details)
{
    let react=obj_details[k];
    for(let i=0;i<react.length;i++)
    {
        let detail=react[i];
        detail["reaction"]=k;
        arr_details.push(detail);
    }
    
}
console.log(arr_details);
}
convert(obj_details);