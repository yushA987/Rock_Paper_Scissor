const arr1 = ["Stone_flipped.png", "Paper_flipped.png", "Scissor_flipped.png"];
const arr2 = ["Stone", "Paper", "Scissor"];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
document.querySelector(".middle").style.display = "none";
document.querySelector(".end").style.display = "none";
var check = document.querySelector(".container");
var stone = check.querySelector(".Stone");
var paper = check.querySelector(".Paper");
var scissor = check.querySelector(".Scissor");
// console.log(stone);
function check_result(player1, player2){
    if(player1 == player2)
    return "DRAW";
    if(player1 == "Stone"){
        if(player2 == "Scissor")
        return "WIN";
        else
        return "LOSE";
    }
    else if(player1 == "Paper"){
        if(player2 == "Stone")
        return "WIN";
        else
        return "LOSE"
    }
    else{
        if(player2 == "Paper")
        return "WIN";
        else
        return "LOSE"
    }
}
console.log(check.addEventListener("click", ()=>{
    
}))
stone.addEventListener("click", ()=>{
    document.querySelector(".middle").style.display = "block";
    document.querySelector(".end").style.display = "flex";
    document.querySelector(".choice1").innerHTML = "Stone";
    let n = getRndInteger(0,3);
    console.log(n);
    console.log(arr2[n]);
    document.querySelector(".choice2").innerHTML = arr2[n];
    document.querySelector(".participant img").src = "Stone.png";
    document.querySelector(".computer img").src = arr1[n];
    let res = check_result("Stone", arr2[n]);
    document.querySelector(".result").innerHTML = res;
})
paper.addEventListener("click", ()=>{
    document.querySelector(".middle").style.display = "block";
    document.querySelector(".end").style.display = "flex";
    document.querySelector(".choice1").innerHTML = "Paper";
    let n = getRndInteger(0,3);
    console.log(n);
    console.log(arr2[n]);
    document.querySelector(".choice2").innerHTML = arr2[n];
    document.querySelector(".participant img").src = "Paper.png";
    document.querySelector(".computer img").src = arr1[n];
    let res = check_result("Paper", arr2[n]);
    document.querySelector(".result").innerHTML = res;
})
scissor.addEventListener("click", ()=>{
    document.querySelector(".middle").style.display = "block";
    document.querySelector(".end").style.display = "flex";
    document.querySelector(".choice1").innerHTML = "Scissor";
    let n = getRndInteger(0,3);
    console.log(n);
    console.log(arr2[n]);
    document.querySelector(".choice2").innerHTML = arr2[n];
    document.querySelector(".participant img").src = "Scissor.png";
    document.querySelector(".computer img").src = arr1[n];
    let res = check_result("Scissor", arr2[n]);
    document.querySelector(".result").innerHTML = res;
})
