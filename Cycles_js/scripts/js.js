
// //Задача 1
// for (i=1; i<=10; i++){
//     console.log(i);
// }
//
// //Задача 2
// let N=Number(prompt("Число N"));
// for (i=2; i<=N; i+=2){
//     console.log(i);
// }

// // Задача 3
// let N=Number(prompt("Число N"));
// let sum=0;
// for (i=1; i <= N; i++) {
//     sum+=i
// }

// //Задача 4
// let N=Number(prompt("Число N"));
// for (i = N; i>=1; i--) {
//     console.log(i)
// }

// // Задача 5
//
// let N=Number(prompt("Число N"));
// for(i=1;i<=10;i++){
//     console.log(`${N} * ${i} = ${N*i}`)
// }

// // Задача 6
// let parol="admin123";
// do{
//     N = prompt("Напишіть пароль:");
//     if(N!==parol){
//         console.log("Неправильний пароль")
//     }
// }while(N !== parol);
// if (N===parol){
//     console.log("Пароль правильний")
// }

// //Задача 7
// let parol="admin123";
// let i=1;
// do{
//     N = prompt("Напишіть пароль:")
//     i++
//     if(N!==parol){
//         console.log("Неправильний паро]ль")
//     }
//     if (i>3){
//         break
//     }
// }while(N!==parol)
// if (N===parol){
//     console.log("Пароль правильний")
// }

// //Задача 8
// for (i = 1; i <= 20; i++) {
//     if(i%2===0) continue;
//     console.log(i);
// }

// // Задача 9
// let N=Number(prompt("Число N"));
// let i=0;
// while(N>=1){
//     i++
//     N=N/10
// }
// console.log(i);



//Задача 10
let num=Number(prompt("Що треба вгадати"));
let i;
while (i!==num){
    i=Number(prompt("Вгадайте число"))
    if (i<num){
        alert("Більше")
    }
    if (i>num){
        alert("Менше")
    }

}
if (i===num){
    alert("Йеееей ви перемогли")
}
