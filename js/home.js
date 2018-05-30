function init(){
    console.log("Javascript initialized!");

    updateCostButtons();
    setInterval(gotoNextQuarter, 5000);
}

function updateCostButtons(){
    //Close all of the planet tabs
    buttons = document.getElementsByClassName("cost-button");
    for (i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        if(button.getAttribute("cost") > money){
            button.disabled = true;
        }else{
            button.disabled = false;
        }
    }
}

function openPlanetTab(name){
    console.log("Opening planet tab: " + name);

    //Close all of the planet tabs
    tabs = document.getElementsByClassName("planet-tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(name).style.display = "block";
}

function newWoodRefinery(){
    if(money < 1500)
        return;

    loseMoney(1500);
    addMoneyPerQuarter(250);
}

function newTreeFarm(){
    if(money < 500)
        return;
    
    loseMoney(500);
    addMoneyPerQuarter(25);
}

// Money

var money = 0;
var moneyPerQuarter = 100;

function gainMoney(amount){
    setMoney(money + amount)
}

function addMoneyPerQuarter(amount){
    moneyPerQuarter += amount

    document.getElementById("moneyPerQuarter").innerHTML = "Money Per Quarter: $" + moneyPerQuarter;
}

function gotoNextQuarter(){
    gainMoney(moneyPerQuarter);
}

function loseMoney(amount){
    setMoney(money - amount)
}

function setMoney(amount){
    money = amount;
    updateCostButtons();
    document.getElementById("money").innerHTML = "Money: $" + money;
}
