
var wood = 0;
var woodPrice = 25;

var money = 0;

function updateCostButtons() {
    updateCostButtonGroup("cost-button-money", money);
    updateCostButtonGroup("cost-button-wood", wood);
}

function updateCostButtonGroup(className, value) {
    //Close all of the planet tabs
    buttons = document.getElementsByClassName(className);
    for (i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        if (button.getAttribute("cost") > value) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
}

function sellWood(amount){
    if(amount > wood)
        amount = wood;

    gainMoney(wood * 25);
    loseWood(amount); 
}

function gainWood(amount) {
    setWood(wood + amount)
}

function loseWood(amount) {
    setWood(wood - amount)
}

function setWood(amount) {
    wood = amount;
    document.getElementById("wood").innerHTML = "Wood: " + wood;
    
    woodPrice = calcPrice(wood);
    document.getElementById("woodPrice").innerHTML = "Current Price: " 
        + (Math.round(woodPrice * 100) / 100).toFixed(2);

    updateCostButtons();
}


function gainMoney(amount) {
    setMoney(money + amount)
}

function loseMoney(amount) {
    setMoney(money - amount)
}

function setMoney(amount) {
    money = amount;
    updateCostButtons();
    document.getElementById("money").innerHTML = "Money: $" + money;
}

function calcPrice(amount){
    return  10 / ((amount + 1) ^ 1/2);
}