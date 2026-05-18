let grade = prompt("Яка оцінка?")
let play;
switch (grade){
    case "12":
    case "11":
    case "10":
        play="Відмінний результат"
        break;
    case "9":
    case "8":
    case "7":
        play="Добрий результат"
        break;
    case "6":
    case "5":
    case "4":
        play="Задовільний результат"
        break;
    case "3":
    case "2":
    case "1":
        play="Потрібно покращити знання"
        break;
    default:
        play="Некоректна оцінка"

}
console.log(play);
alert(play);