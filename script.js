let score = 0;
let spc = 1;
let sps = 0;
let cps = 0;
let shopitem1cost = 10;
let shopitem2cost = 50;
let shopitem3cost = 300;
let shopitem1spc = 1;
let shopitem2sps = 1;
let shopitem3cps = 1;
let item1tierend = false;
let item1tier = 10;
let item2tierend = false;
let item2tier = 10;
let item3tierend = false;
let item3tier = 10;
let autoclickProgress = 0;

const shopitem1progress = document.getElementById("shopitem1progress");
const shopitem2progress = document.getElementById("shopitem2progress");
const shopitem3progress = document.getElementById("shopitem3progress");

const shopitem3text = document.getElementById("shopitem3text");
const shopitem2text = document.getElementById("shopitem2text");
const shopitem1text = document.getElementById("shopitem1text");

const scoreperclick = document.getElementById("scoreperclick");
const scorepersecond = document.getElementById("scorepersecond");
const clickspersecond = document.getElementById("clickspersecond");

const myscore = document.getElementById("myscore");
const mybutton = document.getElementById("mybutton");

const shopitem1 = document.getElementById("shopitem1");
const shopitem2 = document.getElementById("shopitem2");
const shopitem3 = document.getElementById("shopitem3");

function item1checktierend() {
    if (spc >= item1tier) {
        item1tierend = true;
        item1tier = Math.floor(item1tier * 4.6);
    }
}

function item2checktierend() {
    if (sps >= item2tier) {
        item2tierend = true;
        item2tier = Math.floor(item2tier * 4.6);
    }
}

function item3checktierend() {
    if (cps >= item3tier) {
        item3tierend = true;
        item3tier = Math.floor(item3tier * 4.6);
    }
}

function updatetieritem1() {
    shopitem1cost = Math.floor(shopitem1cost * 2.2);
    shopitem1text.textContent = "cost = " + shopitem1cost;
    shopitem1spc = shopitem1spc * 5;
    shopitem1.textContent = "get +" + shopitem1spc + " score per click";
}

function updatetieritem2() {
    shopitem2cost = Math.floor(shopitem2cost * 2.2);
    shopitem2text.textContent = "cost = " + shopitem2cost;
    shopitem2sps = shopitem2sps * 5;
    shopitem2.textContent = "get +" + shopitem2sps + " score per second";
}

function updatetieritem3() {
    shopitem3cost = Math.floor(shopitem3cost * 2.2);
    shopitem3text.textContent = "cost = " + shopitem3cost;
    shopitem3cps = shopitem3cps * 5;
    shopitem3.textContent = "get +" + shopitem3cps + " autoclicks per second";
}

function shopitem1clicked() {
    if (score >= shopitem1cost) {
        score -= shopitem1cost;
        spc += shopitem1spc;

        item1checktierend();

        if (item1tierend == true) {
            updatetieritem1();
            item1tierend = false;
        }

        shopitem1cost = Math.floor(shopitem1cost * 1.3);
        shopitem1text.textContent = "cost = " + shopitem1cost;

        myscore.textContent = score.toFixed(2);
        scoreperclick.textContent = spc;

        updateshopbutton();

        shopitem1progress.max = item1tier;
        shopitem1progress.value = spc;
    }
}

function shopitem2clicked() {
    if (score >= shopitem2cost) {
        score -= shopitem2cost;
        sps += shopitem2sps;

        item2checktierend();

        if (item2tierend == true) {
            updatetieritem2();
            item2tierend = false;
        }

        shopitem2cost = Math.floor(shopitem2cost * 1.3);
        shopitem2text.textContent = "cost = " + shopitem2cost;

        myscore.textContent = score.toFixed(2);
        scorepersecond.textContent = sps;

        updateshopbutton();

        shopitem2progress.max = item2tier;
        shopitem2progress.value = sps;
    }
}

function shopitem3clicked() {
    if (score >= shopitem3cost) {
        score -= shopitem3cost;
        cps += shopitem3cps;

        item3checktierend();

        if (item3tierend == true) {
            updatetieritem3();
            item3tierend = false;
        }

        shopitem3cost = Math.floor(shopitem3cost * 1.3);
        shopitem3text.textContent = "cost = " + shopitem3cost;

        myscore.textContent = score.toFixed(2);
        clickspersecond.textContent = cps;

        updateshopbutton();

        shopitem3progress.max = item3tier;
        shopitem3progress.value = cps;
    }
}

function buttonclicked() {
    console.log(score);

    score = score + spc;

    myscore.textContent = score.toFixed(2);
    updateshopbutton();
}

function addscore() {
    score = score + (sps / 20);

    myscore.textContent = score.toFixed(2);
    updateshopbutton();
}

function autoclick() {
    score = score + (spc * cps / 20);

    myscore.textContent = score.toFixed(2);
    updateshopbutton();
}

function updateshopbutton() {
    if (score >= shopitem1cost) {
        shopitem1.disabled = false;
    } else {
        shopitem1.disabled = true;
    }

    if (score >= shopitem2cost) {
        shopitem2.disabled = false;
    } else {
        shopitem2.disabled = true;
    }

    if (score >= shopitem3cost) {
        shopitem3.disabled = false;
    } else {
        shopitem3.disabled = true;
    }
}

setInterval(addscore, 50);
setInterval(autoclick, 50);

mybutton.addEventListener("click", buttonclicked);
shopitem1.addEventListener("click", shopitem1clicked);
shopitem2.addEventListener("click", shopitem2clicked);
shopitem3.addEventListener("click", shopitem3clicked);