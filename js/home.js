function init() {
    console.log("Javascript initialized!");

    setMoney(500);
}

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

function openPlanetTab(name) {
    console.log("Opening planet tab: " + name);

    //Close all of the planet tabs
    tabs = document.getElementsByClassName("planet-tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(name).style.display = "block";
}

function newWoodRefinery() {
    if (money < 1500)
        return;

    loseMoney(1500);
}

function newTreeFarm() {
    if (money < 500)
        return;

    loseMoney(500);
    setInterval(function () { gainWood(25) }, 1000);
}

function sellWood(amount){
    if(amount > wood)
        amount = wood;

    gainMoney(wood * 25);
    loseWood(amount);
}

// Resources

var wood = 0;
var money = 500;

function gainWood(amount) {
    setWood(wood + amount)
}

function loseWood(amount) {
    setWood(wood - amount)
}

function setWood(amount) {
    wood = amount;
    document.getElementById("wood").innerHTML = "Wood: " + wood;
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
