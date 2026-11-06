function randomNumber(){
    return Math.floor(Math.random()*6)+1;
}
let randNumber1=randomNumber();
let randNumber2=randomNumber();
/* console.log(randNumber1 + " " + randNumber2); */
let randImageSource1 = "./images/dice" + randNumber1 + ".png";
let randImageSource2 = "./images/dice" + randNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randImageSource2);
if(randNumber1>randNumber2)
{
document.querySelector("h1").textContent ="igrac 1 je pobijedio";
}
else if(randNumber1<randNumber2){
document.querySelector("h1").textContent ="igrac 2 je pobijedio";
}
else{
document.querySelector("h1").textContent ="nerijeseno";
}