

document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const accountNumber = document.getElementById('account-number').value;
        const pin = document.getElementById('pin').value;

        if( accountNumber.length === 5 )
        {
            if( pin === '1234' )
            {
                window.location.href = '/main.html';
            }
            else
            {
                alert('You entered a Wrong PIN Number');
            }
        }
        else
        {
            alert('You entered a Wrong Number');
        }
    })