

const errorMessages = {
    "emptyMessage": "Username or Password Field should not be empty",
    "passswordLengthError": "Password should be atleast 8 Characters long"
};

function validateForm(errorElement, errorMessage) {
    errorElement.innerHTML = errorMessage;
}


const errorElement = document.querySelector("#error-message");




const validate = document.querySelector("#validate");

validate.addEventListener("click", function (e) {

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    if (username == "" || password == "") {
        const ErrorMessage = errorMessages.emptyMessage;
        validateForm(errorElement, ErrorMessage);
    } else if (password.length < 8) {
        console.log("else is working");
        const ErrorMessage = errorMessages.passswordLengthError;
        validateForm(errorElement, ErrorMessage);
    }

    e.preventDefault();
})

