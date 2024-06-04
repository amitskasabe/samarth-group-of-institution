let calc = document.querySelector("#caclulate");

calc.addEventListener("click", (e) => {
    e.preventDefault(); 
    let loanAmount = parseFloat(document.querySelector("#loanAmount").value);
    let interest = parseFloat(document.querySelector("#interest").value);
    let tenure = parseInt(document.querySelector("#tenure").value);
    let perMonthEMI = document.querySelector("#perMonthEmi");

    let calculateEMI = (loanAmount, interest, tenure) => {
        let totalAmountWithInterest = (loanAmount * interest) / 100;
        totalAmountWithInterest = loanAmount + totalAmountWithInterest;
        tenure = tenure * 12;
        let installmentsAmount = parseInt(totalAmountWithInterest / tenure);
        perMonthEMI.innerHTML = installmentsAmount;
       
    }
    calculateEMI(loanAmount, interest, tenure);
    e.preventDefault();

});
