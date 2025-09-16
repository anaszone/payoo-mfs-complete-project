
document.getElementById('transaction-container')
    .addEventListener('click', function(){
        document.getElementById('addmoney').style.display = 'none';
         document.getElementById('cashout').style.display = 'none';
         document.getElementById('transaction-history').style.display = 'block';
    })