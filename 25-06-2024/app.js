// console.log(mynameis);
function PrintMyName(myname , element)
{
    // string
    // object 
    // bool 
    // null 
    element.innerHTML = myname;
    
}
const selectName = document.querySelector("#name"); // btn
const showMessage = document.querySelector("#showmsg");
selectName.addEventListener("click" , ()=>{
    const mynameis = document.querySelector("#myname").value;
    
    PrintMyName(mynameis , showMessage);
})




// function sayMyName(myname) // parameter 
// {
//     console.log(`My name is ${myname}`);
// }
// diff between parameters and arguments 

// sayMyName("amit"); // arguments
// sayMyName("sonal"); // arguments
// sayMyName("rohit");
// sayMyName("john");
// sayMyName("vinay");


const printMyNameOnScreen = (name , element) => {
    element.innerHTML = name;
}

const selectName1 = document.querySelector("#name"); // btn
const showMessage1 = document.querySelector("#showmsg");

selectName1.addEventListener("click" , ()=>{
    const mynameis = document.querySelector("#myname").value;
    printMyNameOnScreen(mynameis , showMessage1);
})

