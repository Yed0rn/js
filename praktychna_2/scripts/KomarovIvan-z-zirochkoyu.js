let temperature=prompt("Яка температура?")
let sensorError=prompt("Помилка?")
if (sensorError==="true"){
    console.log("Помилка датчика температури")
    alert("Помилка датчика температури")

}else if(sensorError==="true" && temperature<18){
    console.log("Увімкнути обігрів")
    alert("Увімкнути обігрів")
}else if(sensorError==="true" && (temperature>=18 && temperature<=25)){
    console.log("Температура комфортна")
    alert("Температура комфортна")
}else if(sensorError==="true" && temperature>25 ){
    console.log("Увімкнути кондиціонер")
    alert("ТУвімкнути кондиціонер")
}