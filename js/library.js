function tabsBtnAddClass(id1, id2){
    document.getElementById(id1).classList.add('text-white', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600');
    document.getElementById(id1).classList.remove('text-gray-600');
    document.getElementById(id2).classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600');
    document.getElementById(id2).classList.add('text-gray-600');
}

// calculate values

function calculateValues(){
    const income = parseFloat(document.getElementById('income').value) || 0;
    const software = parseFloat(document.getElementById('software').value) || 0;
    const courses = parseFloat(document.getElementById('courses').value) || 0;
    const internet = parseFloat(document.getElementById('internet').value) || 0;
    const savingValue = parseFloat(document.getElementById('saving-percentage').value) || 0;

    const totalCost = software + courses + internet;
    const balance = income - totalCost;
    const saving = (balance * savingValue) / 100;
    const remainingAmount = balance - saving;

    return { income, totalCost, balance, saving, remainingAmount };
}

// input field validate condition check

function validateFields(){
    const income = document.getElementById('income').value;
    const software = document.getElementById('software').value;
    const courses = document.getElementById('courses').value;
    const internet = document.getElementById('internet').value;
    let hasError = false;

    // condition
    if(isNaN(income) || income <=0){
        document.getElementById('income-error').classList.remove('hidden');
    }
    else{
        document.getElementById('income-error').classList.add('hidden');
    }
    if(isNaN(software) || software <=0){
        document.getElementById('amount-error').classList.remove('hidden');
    }
    else{
        document.getElementById('amount-error').classList.add('hidden');
    }
    if(isNaN(courses) || courses <=0){
        document.getElementById('number-error').classList.remove('hidden');
    }
    else{
        document.getElementById('number-error').classList.add('hidden');
    }
    if(isNaN(internet) || internet <=0){
        document.getElementById('internet-error').classList.remove('hidden');
    }
    else{
        document.getElementById('internet-error').classList.add('hidden');
    }
    if(!hasError){
        document.getElementById('income-error').classList.add('hidden');
        document.getElementById('amount-error').classList.add('hidden');
        document.getElementById('number-error').classList.add('hidden');
        document.getElementById('internet-error').classList.add('hidden');
    }
}
