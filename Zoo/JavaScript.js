var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");

var pic1 = document.getElementById("background");
var pic2 = document.getElementById("monkeyDoor");
var pic3 = document.getElementById("elephantDoor");
var pic4 = document.getElementById("lionDoor");
var pic5 = document.getElementById("monkeyFood");
var pic6 = document.getElementById("elephantFood");
var pic7 = document.getElementById("lionFood");
var pic8 = document.getElementById("penSprinkler");
var pic9 = document.getElementById("leftSprinkler");
var pic10 = document.getElementById("rightSprinkler");

var monkeyFed = document.getElementById("monkeyFed");
var elephantFed = document.getElementById("elephantFed");
var lionFed = document.getElementById("lionFed");

button1.onclick = function(){
    if(window.getComputedStyle(pic2).display === "none"){
        pic2.classList.remove("hidden");
    }else{
        pic2.classList.add("hidden");
    }
}

button2.onclick = function(){
    if(window.getComputedStyle(pic3).display === "none"){
        pic3.classList.remove("hidden");
    }else{
        pic3.classList.add("hidden");
    }
}

button3.onclick = function(){
    if(window.getComputedStyle(pic4).display === "none"){
        pic4.classList.remove("hidden");
    }else{
        pic4.classList.add("hidden");
    }
}

button4.onclick = function(){
    if(window.getComputedStyle(pic2).display === "none" && window.getComputedStyle(pic3).display === "none" && window.getComputedStyle(pic4).display === "none"){
        pic2.classList.remove("hidden");
        pic3.classList.remove("hidden");
        pic4.classList.remove("hidden");
    }else{
        pic2.classList.add("hidden");
        pic3.classList.add("hidden");
        pic4.classList.add("hidden");
    }
}

button5.onclick = function(){
    clearTimeout(setTimeout(function(){
        monkeyFed.innerHTML = "FEED MONKEYS"; monkeyFed.style.color = "#ff0000";},25000));
    monkeyFed.style.color = "#E5E27B";
    var time = new Date();
    pic5.classList.remove("hidden");
    button5.style.backgroundColor = "#636160";
    monkeyFed.innerHTML = "Last Fed: " + time.toLocaleTimeString();
    setTimeout(function(){
        pic5.classList.add("hidden");
        button5.style.backgroundColor = "#E5E27B";}, 20000);
    setTimeout(function(){
        monkeyFed.innerHTML = "FEED MONKEYS"; monkeyFed.style.color = "#ff0000";},25000);   
}

button6.onclick = function(){
    clearTimeout(setTimeout(function(){
        elephantFed.innerHTML = "FEED ELEPHANT"; elephantFed.style.color = "#ff0000";},25000));
    elephantFed.style.color = "#E5E27B";
    var time = new Date();
    pic6.classList.remove("hidden");
    button6.style.backgroundColor = "#636160";
    elephantFed.innerHTML = "Last Fed: " + time.toLocaleTimeString();
    setTimeout(function(){
        pic6.classList.add("hidden");
        button6.style.backgroundColor = "#E5E27B";}, 20000);
    setTimeout(function(){
        elephantFed.innerHTML = "FEED ELEPHANT"; elephantFed.style.color = "#ff0000";},25000);
}

button7.onclick = function(){
    clearTimeout(setTimeout(function(){
        lionFed.innerHTML = "FEED LIONS"; lionFed.style.color = "#ff0000";},25000));
    lionFed.style.color = "#E5E27B";
    var time = new Date();
    pic7.classList.remove("hidden");
    button7.style.backgroundColor = "#636160";
    lionFed.innerHTML = "Last Fed: " + time.toLocaleTimeString();
    setTimeout(function(){
        pic7.classList.add("hidden");
        button7.style.backgroundColor = "#E5E27B";}, 20000);
    setTimeout(function(){
        lionFed.innerHTML = "FEED LIONS"; lionFed.style.color = "#ff0000";},25000);
}

button12.onclick = function(){
    clearTimeout(setTimeout(function(){
        monkeyFed.innerHTML = "FEED MONKEYS"; monkeyFed.style.color = "#ff0000";},25000));
    monkeyFed.style.color = "#E5E27B";

    clearTimeout(setTimeout(function(){
        elephantFed.innerHTML = "FEED ELEPHANT"; elephantFed.style.color = "#ff0000";},25000));
    elephantFed.style.color = "#E5E27B";

    clearTimeout(setTimeout(function(){
        lionFed.innerHTML = "FEED LIONS"; lionFed.style.color = "#ff0000";},25000));
    lionFed.style.color = "#E5E27B";

    var time = new Date();
    pic5.classList.remove("hidden");
    pic6.classList.remove("hidden");
    pic7.classList.remove("hidden");

    button12.style.backgroundColor = "#636160";

    button5.style.backgroundColor = "#636160";
    monkeyFed.innerHTML = "Last Fed: " + time.toLocaleTimeString();

    button6.style.backgroundColor = "#636160";
    elephantFed.innerHTML = "Last Fed: " + time.toLocaleTimeString();

    button7.style.backgroundColor = "#636160";
    lionFed.innerHTML = "Last Fed: " + time.toLocaleTimeString();

    setTimeout(function(){
        pic5.classList.add("hidden");
        button5.style.backgroundColor = "#E5E27B";}, 20000);
    setTimeout(function(){
        pic6.classList.add("hidden");
        button6.style.backgroundColor = "#E5E27B";}, 20000);
    setTimeout(function(){
        pic7.classList.add("hidden");
        button7.style.backgroundColor = "#E5E27B";}, 20000);
    setTimeout(function(){
        button12.style.backgroundColor = "#E5E27B";}, 20000);
    setTimeout(function(){
        monkeyFed.innerHTML = "FEED MONKEYS"; monkeyFed.style.color = "#ff0000";},25000);
    setTimeout(function(){
        elephantFed.innerHTML = "FEED ELEPHANT"; elephantFed.style.color = "#ff0000";},25000);
    setTimeout(function(){
        lionFed.innerHTML = "FEED LIONS"; lionFed.style.color = "#ff0000";},25000);
}

button8.onclick = function(){
    clearTimeout(setTimeout(function(){
        pic8.classList.add("hidden");},30000));
    clearTimeout(setTimeout(function(){
        button8.style.backgroundColor = "#2e6c69";}, 30000));
    pic8.classList.remove("hidden");
    button8.style.backgroundColor = "#636160";
    setTimeout(function(){
        pic8.classList.add("hidden");},30000);
    setTimeout(function(){    
        button8.style.backgroundColor = "#2e6c69";}, 30000);
}

button9.onclick = function(){
    clearTimeout(setTimeout(function(){
        pic9.classList.add("hidden");},30000));
    clearTimeout(setTimeout(function(){
        button9.style.backgroundColor = "#2e6c69";}, 30000));
    pic9.classList.remove("hidden");
    button9.style.backgroundColor = "#636160";
    setTimeout(function(){
        pic9.classList.add("hidden");},30000);
    setTimeout(function(){    
        button9.style.backgroundColor = "#2e6c69";}, 30000);
}

button10.onclick = function(){
    clearTimeout(setTimeout(function(){
        pic10.classList.add("hidden");},30000));
    clearTimeout(setTimeout(function(){
        button10.style.backgroundColor = "#2e6c69";}, 30000));
    pic10.classList.remove("hidden");
    button10.style.backgroundColor = "#636160";
    setTimeout(function(){
        pic10.classList.add("hidden");},30000);
    setTimeout(function(){    
        button10.style.backgroundColor = "#2e6c69";}, 30000);
}

button11.onclick = function(){
    clearTimeout(setTimeout(function(){
        pic8.classList.add("hidden");},30000));
    clearTimeout(setTimeout(function(){
        button8.style.backgroundColor = "#2e6c69";}, 30000));
    clearTimeout(setTimeout(function(){
        pic9.classList.add("hidden");},30000));
    clearTimeout(setTimeout(function(){
        button9.style.backgroundColor = "#2e6c69";}, 30000));
    clearTimeout(setTimeout(function(){
        pic10.classList.add("hidden");},30000));
    clearTimeout(setTimeout(function(){
        button10.style.backgroundColor = "#2e6c69";}, 30000));
    clearTimeout(function(){    
        button11.style.backgroundColor = "#2e6c69";}, 30000);
    pic8.classList.remove("hidden");
    button8.style.backgroundColor = "#636160";
    pic9.classList.remove("hidden");
    button9.style.backgroundColor = "#636160";
    pic10.classList.remove("hidden");
    button10.style.backgroundColor = "#636160";
    button11.style.backgroundColor = "#636160";
    setTimeout(function(){
        pic8.classList.add("hidden");},30000);
    setTimeout(function(){    
        button8.style.backgroundColor = "#2e6c69";}, 30000);
    setTimeout(function(){
        pic9.classList.add("hidden");},30000);
    setTimeout(function(){    
        button9.style.backgroundColor = "#2e6c69";}, 30000);
    setTimeout(function(){
        pic10.classList.add("hidden");},30000);
    setTimeout(function(){    
        button10.style.backgroundColor = "#2e6c69";}, 30000);
    setTimeout(function(){    
        button11.style.backgroundColor = "#2e6c69";}, 30000);
}