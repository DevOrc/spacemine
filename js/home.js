function init() {
    console.log("Javascript initialized!");

    setMoney(500);
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

