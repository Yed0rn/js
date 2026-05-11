// false
// 0
// 0n
// ""
// null
// undefined
// NaN

// if(умова){
//     [інструкція якщо істине];
//     [інструкція якщо істине];
//     [інструкція якщо істине]
// } else if{
//     [інструкція якщо істине];
//     [інструкція якщо істине]
// }else{
//     [інструкція якщо хиба]
// }

// Оператори порівняння
// ==
// !=
// >
// <
// <=
// >=
// === - ПЕРЕВІРЯЄ І ТИП ДАННИХ
// !==

// let a = 3,b = "3";
// console.log(a===b);

// let a = prompt("Перше число");
// let b = prompt("Друге число");
// let c;
// if (a>b){
//     c="a > b"
// }else if (a<b){
//     c="a < b"
// }else{
//     c="a == b"
// }
// alert(c);



// let a = prompt("Перше число");
// let b = prompt("Друге число");
// let c;
// if (a>b)c="a > b";
//
// else if (a<b)
//     c="a < b";
// else
//     c="a == b"
//
// alert(c);


//умова switch

// let course = prompt("What is the name of your course?"), title;
// switch (course) {
//     case 'figma':
//         title = 'WEB інструменти';
//         break;
//     case 'Python':
//     case 'Javascript':
//         title="Програмування";
//         break;
//     case 'Frontend':
//     case 'CSS':
//     case 'HTML':
//         title='WEB програмування';
//         break;
//
//     default:
//         title ="don't know"
//         break;
// }
// alert(title);


// Логічні оператори
//
// let a=false, b=false, c=true;
//
// console.log(!a) //- заперечення
// console.log(!!a) //- стрінгове заперечення
// console.log(a && c)
// console.log(a||b)

// let age = prompt("Enter age?"),info;
// if (age<18){
//     info='школота'
// }else if(age>=18 && age<35){
//     info='призивний';
// }else{
//     info='Ще є шанс'
// }
// alert(info)


let name = prompt("What is your name?");
let greetings = `Вітаємо, ${name || "гість"}`
alert(greetings)