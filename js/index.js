// tabs show function

document.getElementById('history').addEventListener('click', function(){
    tabsBtnAddClass('history', 'assistant');
    document.getElementById('assistant-from').classList.add('hidden');
    document.getElementById('results-summary').classList.remove('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    // errors message
    const {totalCost, income} = calculateValues();
    if(totalCost > income){
        document.getElementById('logic-error').classList.remove('hidden');
        document.getElementById('results-summary').classList.add('hidden');
        document.getElementById('history-section').classList.add('hidden');
    }
})


document.getElementById('assistant').addEventListener('click', function(){
    tabsBtnAddClass('assistant','history');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('assistant-from').classList.remove('hidden');
})

document.getElementById('calculate').addEventListener('click', function() {
    const { income, totalCost, balance } = calculateValues(); 
    if (income === '' || isNaN(income) || income <= 0) {
        document.getElementById('income-error').classList.remove('hidden');
        document.getElementById('results-summary').classList.add('hidden');
        return; 
    }
    else if(totalCost > income){
        document.getElementById('logic-error').classList.remove('hidden');
        document.getElementById('results-summary').classList.add('hidden');
    }
     else {
        document.getElementById('income-error').classList.add('hidden');
        document.getElementById('logic-error').classList.add('hidden');
        document.getElementById('results-summary').classList.remove('hidden');
    }

    // Display total cost and balance
    document.getElementById('totalCost').innerText = totalCost;
    document.getElementById('balance').innerText = balance;

    // Add the result to history list
    const div = document.createElement('div');
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    div.className= 'bg-white shadow-lg rounded-lg py-2 px-3 border-l-2 border-purple-600';
    div.innerHTML = `
    <div>
      <div class="text-xs text-gray-500 flex justify-between"><div>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</div><div>${new Date().toLocaleDateString()}</div></div>
      <p class="text-xs text-gray-500">Income: ৳${income}</p>
      <p class="text-xs text-gray-500">TotalCost: ৳${totalCost}</p>
      <p class="text-xs text-gray-500">Balance: ৳${balance}</p>
    </div>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(div, historyContainer.firstChild);
});



document.getElementById('calculate-savings').addEventListener('click', function(){
    const {saving, remainingAmount} = calculateValues();
    document.getElementById('savings-amount').innerText = saving;
    document.getElementById('remaining-balance').innerText = remainingAmount;
})


// error messages start


['income', 'software', 'courses', 'internet'].forEach ( id => { document.getElementById(id).addEventListener('input', function(){
    validateFields();
    })
});
