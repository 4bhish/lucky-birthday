const inputDob = document.querySelector("#dob-input");
const luckyNumber = document.querySelector("#lucky-number");

const checkBtn = document.querySelector("#check-button");

checkBtn.addEventListener("click", function clickHandler()
{
    
})

function luckyDob()
{
    const dob= inputDob.value;
    sum=calculate(dob)

}

function calculate(dob)
{
    dob= dob.replaceAll("-","");
}