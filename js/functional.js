function getInputValue(fieldID) {
    const inputField = document.getElementById(fieldID);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function updateTotal(fieldID, amount) {

    const totalTag = document.getElementById(fieldID);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
    return newTotal;

}
function updateBalance() {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount)

    // console.log(amount);
})

// handel withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);


})
