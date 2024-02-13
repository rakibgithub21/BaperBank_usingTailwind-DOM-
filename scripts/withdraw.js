document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number')
        return;
    }


    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baaper Bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})