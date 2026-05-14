let USD_to_UAH =43.7;
const USD_to_UAH_count=43.7;
let balance = 210000;
let amount_1 = 60000 ;
let amount_2 = 2600*++USD_to_UAH ;
let amount_3 = 1700*++USD_to_UAH ;
const coworking_fee=3500;
const tech = 4000;
const Netflix_fee=9.99; //долларів
const tax_fee=4500;
const tax=0.05;
console.log(`В цьому кварталі Максим витратив ${(coworking_fee+tech+tax_fee)*3+Netflix_fee*(USD_to_UAH_count*3+3) + (amount_1+amount_2+amount_3)*tax} грн.`);
console.log(`Загальна сума доходу Максима складає ${amount_1+amount_2+amount_3} грн.`)
console.log(`Загальна сума податків становить ${tax_fee*3+(amount_1+amount_2+amount_3)*tax} грн.`)
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${(balance+amount_1+amount_2+amount_3)-((coworking_fee+tech+tax_fee)*3+Netflix_fee*(USD_to_UAH_count*3+3) + (amount_1+amount_2+amount_3)*tax)} грн.`)