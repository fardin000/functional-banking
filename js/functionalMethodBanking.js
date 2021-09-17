
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////  different method   ///////////////////////////
/////////////////appied with function  ////////////////////////////
//////////////////////////////////////////////////////////////////

// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7)

// function doubleIt(num){
//     // const result = 5 * 2;
//     const result = num * 2;
//     return result;
// }
// const fiveDouble = doubleIt(5);





//////////////////////////////////////////////////////////////////////////
//display deposite/withdraw value same time combined fucntion/////////////
//////////////////////////////////////////////////////////////////////////
function getInputValue(inputId){
    //debugger;
    // const depositeInput = document.getElementById('deposite-input');
    const inputField = document.getElementById(inputId);
    // const depositeAmount = depositeInput.value;
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field////////////////////////////////////
    inputField.value = '';
    return amountValue;
}


//////////////////////////////////////////////////////////////////////////////
 //display deposite/withdraw update added value as status combined function/
/////////////////////////////////////////////////////////////////////////
function updatetotalField(totalFieldId, Amount){
    //debugger;
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    //span, paragraph gula ke innerText hisebe output dekhate hoy
    const previousTotal = parseFloat(TotalText);
    //converting string to number
    totalElement.innerText = previousTotal + Amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
 }


////////////////////////////////////////////////////////////////////////
////////combined balance updated display status changing function///////
////////////////////////////////////////////////////////////////////////
function updateBalance(depositeAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
   
    // balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositeAmount;
    }
}

document.getElementById('deposite-button').addEventListener('click', function(){

    // // console.log('desposite button clicked');
    // const depositeInput = document.getElementById('deposite-input');
    // // const depositeAmount = depositeInput.value;
    // const depositeAmountText = depositeInput.value;
    // const depositeAmount = parseFloat(depositeAmountText);
    // //converting string to number
    // //console.log(depositeAmount);
    // //showing in the (browser console) but not in(deposite display) what we enter into the input field
    const depositeAmount = getInputValue('deposite-input');


    //get current deposite////////////////////////////////////
    // const depositeTotal = document.getElementById('deposite-total');
    // const depositeTotalText = depositeTotal.innerText;
    // //span, paragraph gula ke innerText hisebe output dekhate hoy
    // const previousDepositeTotal = parseFloat(depositeTotalText);
    // //converting string to number
    // depositeTotal.innerText = previousDepositeTotal + depositeAmount;
    //ekhane digit dekhabena , rather string hisebe ddekhabe.
    //showing in (deposite display) ---what we have given as input in the input field
    // oporer line e tag er input er inner text ta ke depositeAmount hisebe set korlam
    //console.log(depositeTotalText); //showing (00) in console.
    //-------- updatetotalField('deposite-total', depositeAmount);


    //update balance display/////////////////////////////////////
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositeAmount;

    //------- updateBalance(depositeAmount, true);// true kore dilam

    //clear input field////////////////////////////////////
    // depositeInput.value = '';
    
    //if the input is a minus number then handle with condition
    if(depositeAmount > 0){
        updatetotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }

})


document.getElementById('withdraw-button').addEventListener('click', function(){
    //console.log('withdraw button added');
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    //console.log(withdrawAmount);
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    //update Withdraw
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    //----------updatetotalField('withdraw-total', withdrawAmount);
     
   

    //update balance display
    //update after withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
     //balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //---------updateBalance(withdrawAmount, false);//false kore dilam

    // //clearing input field
    // withdrawInput.value = '';

    if(withdrawAmount > 0 &&  withdrawAmount < currentBalance){
        updatetotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('you can not withdraw more credit than you have in your account');
    }

})

////////////////////////////////////////////////////////////////
//////////////function method ended///////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
