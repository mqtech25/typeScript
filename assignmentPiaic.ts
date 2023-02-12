const user="Hello Qasim, would you like to learn some Javascript today?";
console.log(user);

const username="muhammad qasim";
console.log(username.toUpperCase());
console.log(username.toLowerCase());
const titleCAse=username.split(' ').map((item,i)=>{
    return (item.charAt(0).toUpperCase() + item.slice(1))
})
console.log(titleCAse.join(' '));
