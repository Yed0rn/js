const USD_to_UAH =43.7;
let amount_1 = 68000;
let amount_2 = 2600*USD_to_UAH;
let amount_3 = 1900*USD_to_UAH;
const social_payment = 4500;
const tax =0.05
console.log(`Загальна сума доходу Максима складає ${amount_1+amount_2+amount_3} грн.`)
console.log(`В кінці кварталу Максиму необхідно сплатити ${social_payment+(amount_1+amount_2+amount_3)*tax} грн.`);