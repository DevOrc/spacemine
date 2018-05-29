function init(){
    console.log("Javascript initialized!");
}

function gotoNextQuarter(){
    openNewWindow("html/next_quarter.html", "width=500,height=400");
    gainMoney(100);
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
