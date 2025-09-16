
document.getElementById('addmoney').style.display = 'none';
document.getElementById('cashout').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none';


document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseFloat(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const container = document.getElementById('transactionHistory');

    if (amount && pin ) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;


        const p = document.createElement("p");
        p.innerText = `
        added ${amount};
        `
        container.appendChild(p);

      } 
      else {
           alert('You entered a wrong PIN');
      }
    } else {
      alert("Enter amount");
    }
  });
