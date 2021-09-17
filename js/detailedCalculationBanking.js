console.log('banking js added');

document.getElementById('deposite-button').addEventListener('click', function(){

    // console.log('desposite button clicked');
    const depositeInput = document.getElementById('deposite-input');
    // const depositeAmount = depositeInput.value;
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    //converting string to number
    //console.log(depositeAmount);
    //showing in the (browser console) but not in(deposite display) what we enter into the input field


    //get current deposite/////////////////////
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    //span, paragraph gula ke innerText hisebe output dekhate hoy
    const previousDepositeTotal = parseFloat(depositeTotalText);
    //converting string to number
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;
    //ekhane digit dekhabena , rather string hisebe ddekhabe.

    //showing in (deposite display) ---what we have given as input in the input field
    // oporer line e tag er input er inner text ta ke depositeAmount hisebe set korlam
    //console.log(depositeTotalText); //showing (00) in console.

    //update balance display/////////////////////////////////////
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;

    //clear input field//////////////////
    depositeInput.value = '';
    

})
//value default hisebe text hisebe thake tai cnovert korte hoy default ke

//withdraw function activation

document.getElementById('withdraw-button').addEventListener('click', function(){
    //console.log('withdraw button added');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    //console.log(withdrawAmount);

    //update Withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance display
    //update after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clearing input field
    withdrawInput.value = '';


})


