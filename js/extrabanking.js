
////////////////////////////////////////////////////////
//////////with fresh line of code functional method /////////////////////
////////////////////////////////////////////////////
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
//////////////////////////////////////////////////////////////////////////////
 //display deposite/withdraw update added value as status combined function/
/////////////////////////////////////////////////////////////////////////
function updatetotalField(totalFieldId, Amount){
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + Amount;
}

function getCurrentBalance(){////////////////////////////////////////////
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}



///////////////////////////////////////////////////////////////////////////////
//////////////combined balance updated display status changing function//////////
/////////////////////////////////////////////////////////////////////////////////
function updateBalance(depositeAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();////////////////////////////////
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositeAmount;
    }
}
document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeAmount = getInputValue('deposite-input');
    // updatetotalField('deposite-total', depositeAmount);
    // updateBalance(depositeAmount, true);// true kore dilam

    if(depositeAmount > 0){
        updatetotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input'); 
    const currentBalance = getCurrentBalance();////////////////////////////////////////// 
    // updatetotalField('withdraw-total', withdrawAmount);
    // updateBalance(withdrawAmount, false);//false kore dilam
    if(withdrawAmount > 0 &&  withdrawAmount < currentBalance){ 
        updatetotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('you can not withdraw more credit than you have in your account');
    }

})
