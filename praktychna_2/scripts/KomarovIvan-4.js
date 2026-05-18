let genre = prompt("Який жанр музики?")
let play;
switch (genre){
    case "rock":
        play="Увімкнено рок-плейлист"
        break;
    case "pop":
        play="Увімкнено поп-плейлист"
        break;
    case "jazz":
        play="Увімкнено джаз-плейлист"
        break;
    case "classical":
        play="Увімкнено класичну музику"
        break;
    default:
        play="Жанр не знайдено"

}
console.log(play);
alert(play);