let bill = document.querySelector(".bill-input")
let people = document.querySelector(".people-input")
let tip = document.getElementById("tip-amount")
let total = document.getElementById("total-amount")
let tips = document.querySelectorAll(".tips")
let custom = document.querySelector(".tip-custom")
let resetbtn = document.querySelector(".reset")
let error = document.querySelector(".error")

bill.addEventListener("input", billFun)
people.addEventListener("input", peopleFun)
tips.forEach(function(val){
    val.addEventListener("click", handleClick)
})
custom.addEventListener("input", customInputFun)
resetbtn.addEventListener("click", reset)


bill.value = "0.0"
people.value = "1"
tip.innerHTML = "$" + (0.0).toFixed(2)
total.innerHTML = "$" + (0.0).toFixed(2)

let billV = 0.0
let peopleV = 1
let tipV = 0.15

function billFun(){
    billV = parseFloat(bill.value);
    calcTip()
}
function peopleFun(){
    peopleV = parseFloat(people.value);
    if (peopleV < 1){
        error.style.display = 'flex'
        people.style.border = 'thick solid red'
    }else{
        error.style.display = 'none'
        people.style.border = 'none'
        calcTip()
    }
}
function customInputFun(){
    tipV = parseFloat(custom.value/100)
    tips.forEach(function(val){
        val.classList.remove("active-tip")
    })
    calcTip()
    
}
function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip")
        if (event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip")
            tipV = parseFloat(val.innerHTML)/100
        }
    })
    calcTip()
}


function calcTip(){
    if (peopleV >= 1){
        let tipAmount = (billV * tipV) / peopleV
        let totalA = (billV * tipAmount) / peopleV
        tip.innerHTML = "$" + tipAmount.toFixed(2)
        total.innerHTML = "$" + totalA.toFixed(2)
    }
}

function reset(){
    bill.value = "0.0"
    billFun()
    people.value = "1"
    peopleFun()
    custom.value = ""
}

