let money = 190000000000;
let spentMoney = 0;

let boughtCandies = 0;
let boughtSodas = 0;
let boughtCars = 0;
let boughtIslands = 0;

let boughtCandiesElement = document.getElementById('bought-candies'); 
let boughtSodasElement = document.getElementById('bought-sodas'); 
let boughtCarsElement = document.getElementById('bought-cars'); 
let boughtIslandsElement = document.getElementById('bought-islands'); 

let moneyParagraph = document.getElementById('money');
let spentMoneyElement = document.getElementById('spent-money');
let buyCandyButton = document.getElementById('candy');
let buySodaButton = document.getElementById('soda');
let buyCarButton = document.getElementById('car');
let buyIslandButton = document.getElementById('island');

function spendMoney(quantity, product, name) {
    money = money - quantity;
    spentMoney = spentMoney + quantity;
    spentMoneyElement.textContent = 'Dinero Gastado: $' + new Intl.NumberFormat().format(spentMoney);
    moneyParagraph.textContent = 'Dinero de Jeff Bezos: $' + new Intl.NumberFormat().format(money);
}

buyCandyButton.onclick = function() {
    spendMoney(1)
    boughtCandies++;
    boughtCandiesElement.textContent = 'Dulces Comprados: ' + boughtCandies;
}

buySodaButton.onclick = function() {
    spendMoney(2)
    boughtSodas++;
    boughtSodasElement.textContent = 'Cocas Compradas: ' + boughtSodas;
}

buyCarButton.onclick = function() {
    spendMoney(10000)
    boughtCars++;
    boughtCarsElement.textContent = 'Carros Comprados: ' + boughtCars;
}

buyIslandButton.onclick = function() {
    spendMoney(10000000)
    boughtIslands++;
    boughtIslandsElement.textContent = 'Islas Compradas: ' + boughtIslands;
}