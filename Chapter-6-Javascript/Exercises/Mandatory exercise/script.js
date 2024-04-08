document.getElementById('calculateBtn').addEventListener('click',function(){
    //Get input values
    const costPerLiter = parseFloat(document.getElementById('cost').value);
    const litersPurchased = parseFloat(document.getElementById('liters').value);

    //Calculate total Amount*/
    const totalCost = costPerLiter * litersPurchased;

    //Display total Amount*/
    document.getElementById('totalAmount').textContent = `Total Amount: ${totalCost.toFixed(2)} AED`;
})