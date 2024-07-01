document.querySelector("#btn").addEventListener("click" , (e)=>{
    if(document.querySelector("#txt").value == ""){
        console.log("field is empty");
        document.querySelector("#error").innerHTML = "Feild is empty";
        e.preventDefault();
    } else if (document.querySelector("#txt").value.length < 8){
        document.querySelector("#error").innerHTML = "Feild is less than 8 characters long";
        e.preventDefault();

    }
})