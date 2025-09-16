
document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseFloat(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (amount && pin ) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = sum;

        const container = document.getElementById('transactionHistory');
        const p =document.createElement("p");
        p.innerText = `
        cashout ${amount};
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
