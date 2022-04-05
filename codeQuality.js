// ## Level 3

// Re-write the below code to better code quality standards.
// Hint: use modern ES6 syntax and reduce lines of code.

// ```
// async function getUsers(users) {
//   const new_users = [];

//   for (let i = 0; i < users.length; i = i + 1) {
//     const newUser = user[i];
//     newUser.id = i;

//     new_users.push(newUser);
//   }

//   return new_users;
// }
const getUsers= async (users)=>{
const new_users=users.map((user,i)=>{
    return {
        ...user,id:i
    }
})
return new_users;
}
