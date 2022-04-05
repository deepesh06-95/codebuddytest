// ### level 3:
// 1. Write a recursive function that transforms all the strings to uppercase.
// ```
// // Input object
// ​
// const user = {
//     name: "Elie",
//     job: "Instructor",
//     workDetails: {
//         type: "Part Time",
//         hours: "40 hours"
//     }
//     educationQualifications: [
//         {
//             name: "Full Stack",
//             type: "Certification"
//         },
//         {
//             name: "Javascript",
//             type: "Certification"
//         }
//     ]
// }
// // Output should be
// ​
// {
//     name: "ELIE",
//     job: "INSTRUCTOR",
//     workDetails: {
//         type: "PASRT TimeTIME",
//         hours: "40 HOURS"
//     }
//     educationQualifications: [
//         {
//             name: "FULL STACK",
//             type: "CERTIFICATION"
//         },
//         {
//             name: "JAVASCRIPT",
//             type: "CERTIFICATION"
//         }
//     ]
// }
// ```
const obj = {
        name: "Elie",
        job: "Instructor",
        workDetails: {
            type: "Part Time",
            hours: "40 hours"
        },
        educationQualifications: [
            {
                name: "Full Stack",
                type: "Certification"
            },
            {
                name: "Javascript",
                type: "Certification"
            },
        ]
    }
for(let k in obj)
{
    let x=obj[k];
    console.log(x,(typeof `${x}`))
   if(typeof `${x}` =="string")
    {
     obj[k]=`${obj[k]}`.toUpperCase();
    }
}
console.log(obj)
// 2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.
// ```
// Input string: "a:2,b:3,c:4,a:5,b:6"
// ```
// ```
// Output should be object: {a: 7, b: 9, c: 4}
// ```

let string="a:2,b:3,c:4,a:5,b:6";
function strtosum(str)
{
    let arr=str.split(",");
    let obj={};
    for(let i=0;i<arr.length;i++)
    {
     let [chr,val]=arr[i].split(":");
     if(obj[chr]==undefined)
     {
        obj[chr]=+val;
     }
     else
     {
         let x=obj[chr];
         obj[chr]=x+(+val)
     }
    }
    return obj;
}
console.log(strtosum(string))



// // 3. Check for balanced parentheses using a stack
// // ```
// // Example:
// // exp = "{[({})]}" should be valid
// // but "{[(]} should be invalid
// // ```
function checkparenthesis(str)
{
let stack=[];
let obj={")":"(","]":"[","}":"{"};
for(let i=0;i<str.length;i++)
{
    if(str[i]=="("||str[i]=="{"||str[i]=="[")
    {
        stack.push(str[i])
    }
    else if(str[i]==")"||str[i]=="}"||str[i]=="]")
    {
        let c=obj[str[i]];
        if(stack[stack.length-1]==c)
        {
            stack.pop()
        }
        else
        {
         return "invalid";
        }
    }
}
if(stack.length==0)
{
    return "valid";
}
else
{
    return "invalid";
}
}
console.log(checkparenthesis("{[({})]}"));
console.log(checkparenthesis("{[(]}"));

