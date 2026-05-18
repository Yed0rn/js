let isAuthorized=prompt("Ви авторизований користувач?");
let internetSpeed=prompt("Яка швидкість інтернета?");
let isBanned=prompt("Бан");

if (isAuthorized==="true" && isBanned === "false" && internetSpeed >= 20){
    console.log("Ви увійдете в онлайн режим")
    alert("Ви увійдете в онлайн режим")
}else{
    console.log("Ви не увійдете в онлайн режим")
    alert("Ви не увійдете в онлайн режим")
}
