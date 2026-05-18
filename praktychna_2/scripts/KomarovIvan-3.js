let score=prompt("Ваші бали?")
let homeworkDone=prompt("Всі ДЗ?")
let finalTestPassed=prompt("Пройшли фінальний тест?")
if (homeworkDone==="true" && finalTestPassed==="true" && score>=70){
    console.log("Сертифікат успішно отримано")
    alert("Сертифікат успішно отримано")
}else{
    console.log("Умови для отримання сертифіката не виконані")
    alert("Умови для отримання сертифіката не виконані")
}