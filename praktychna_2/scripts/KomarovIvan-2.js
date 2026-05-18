let day=prompt("Який день тижня?");
let price;
switch (day){
    case "понеділок":
    case "вівторок":
    case "середа":
        price="Вартість квитка складає 150 грн"
        break;
    case "четвер":
    case "п’ятниця":
        price="Вартість квитка складає 200 грн"
        break;
    case "субота":
    case "неділя":
        price="Вартість квитка складає 250 грн"
        break;

    default:
        price="Помилка введення дня тижня"

}
console.log(price);
alert(price);