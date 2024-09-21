function tabsBtnAddClass(id1, id2){
    document.getElementById(id1).classList.add('text-white', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600');
    document.getElementById(id1).classList.remove('text-gray-600');
    document.getElementById(id2).classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600');
    document.getElementById(id2).classList.add('text-gray-600');
}

function calculateValues(){
    const income = parseFloat(document.getElementById('income').value) || 0;
    const software = parseFloat(document.getElementById('software').value) || 0;
    const courses = parseFloat(document.getElementById('courses').value) || 0;
    const internet = parseFloat(document.getElementById('internet').value) || 0;
    const savingValue = parseFloat(document.getElementById('saving-percentage').value) || 0;

    // Calculations
    const totalCost = software + courses + internet;
    const balance = income - totalCost;
    const saving = (balance * savingValue) / 100;
    const remainingAmount = balance - saving;

    // Returning the values needed
    return { income, totalCost, balance, saving, remainingAmount };
}
