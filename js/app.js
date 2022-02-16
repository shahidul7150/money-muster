
document.getElementById('calculate-btn').addEventListener('click', function () {
    // income input 
    const incomeInput=document.getElementById('income-input');
    const incomeValue = parseInt(incomeInput.value);
    console.log(incomeValue)

    // expenses input 
    const foodInput = document.getElementById('food-input');
    const foodValue = parseInt(foodInput.value);
    console.log(foodValue)

    // rent input 
    const rentInput = document.getElementById('rent-input');
    const rentValue = parseInt(rentInput.value);
    console.log(rentValue)

    // clothes input 
    const clothInput = document.getElementById('clothes-input');
    const clothValue = parseInt(clothInput.value);
    console.log(clothValue)

// Total Expenses
    const totalExpenses = foodValue + rentValue + clothValue;
    document.getElementById('expenses-amount').innerText = totalExpenses
    // Balance 
    document.getElementById('balance-amount').innerText = incomeValue - totalExpenses
    
    
})
// saving 
document.getElementById('saving-btn').addEventListener('click', function () {
    const incomeInput=document.getElementById('income-input');
    const incomeValue = parseInt(incomeInput.value);
    const savingInput = document.getElementById('saving-input')
    const savingValue = savingInput.value;
    const saving = (incomeValue * savingValue)/100
    document.getElementById('saving-amount').innerText=saving

    const balance= document.getElementById('balance-amount').innerText;
    const remaining = balance - saving
    console.log(remaining)
    document.getElementById('remain-amount').innerText=remaining

})