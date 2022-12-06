const inputDob = document.querySelector("#dob-input");
const luckyNumber = document.querySelector("#lucky-number");
const showMsg = document.querySelector(".show-result");
const checkBtn = document.querySelector("#check-button");


checkBtn.addEventListener("click", function luckyDob()
{
    const dob= inputDob.value;
    sum=calculate(dob)

   if(inputDob.value && luckyNumber.value ) {
    if(sum % luckyNumber.value === 0 )
    {
        showMessage("Congrats Your Birthday is lucky!🎉")
    }
    else
    {

        
        showMessage("Unfortunately, that's not Lucky Birthday!☹️")
    }} 
    else
    {
        showMessage("You should fill both fields!☹️")
    }


})


function calculate(dob)
{
    dob= dob.replaceAll("-","")
    var sum=0;

    for(i=0;i<dob.length;i++)
    {
        sum= sum + Number(dob.charAt(i))
        
    }
    return sum;
}
function showMessage(msg)
{
    showMsg.innerText = msg

}


