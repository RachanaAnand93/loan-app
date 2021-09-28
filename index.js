function calculateLoan() {
  let amount = document.querySelector("#amount").value;
  console.log(amount);
  let rate = document.querySelector("#interest").value;
  let month = document.querySelector("#month").value;
  if (amount == 0 || rate == 0 || month == 0) {
    alert("Enter a valid number");
  } else {
    const interest = (amount * (rate * 0.01)) / month;
    const monthlyPaid = amount / month + interest;
    const totalAmt = monthlyPaid * month;
    const interestPaid = totalAmt - amount;
    //console.log(total);
    document.querySelector("#final").innerHTML = monthlyPaid.toFixed(2);
    document.querySelector("#amountPaid").innerHTML = totalAmt.toFixed(2);
    document.querySelector("#interestPaid").innerHTML = interestPaid.toFixed(2);
  }
}

let button = document.querySelector("button");
button.addEventListener("click", calculateLoan);
