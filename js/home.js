function init(){
    console.log("Javascript initialized!");
}

function gotoNextQuarter(){
    openNewWindow("html/next_quarter.html", "width=500,height=400");
    gainMoney(100);
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

// Money

var money = 0;

function gainMoney(amount){
    setMoney(money + amount)
}

function loseMoney(amount){
    setMoney(money - amount)
}

function setMoney(amount){
    money = amount;
    document.getElementById("money").innerHTML = "Money: $" + money;
}
