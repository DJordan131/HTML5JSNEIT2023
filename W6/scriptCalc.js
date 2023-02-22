
    var hourlyPay = prompt("Please enter your hourly pay", "Enter your hourly pay here:");  
    alert(`Your hourly pay is ${hourlyPay}`);

    var hoursWorked = prompt("Please tell me how many hours you worked last week.", "Enter Hours worked here."); 
    alert(`Hours worked is  ${hoursWorked}`);
    var taxed = prompt("Enter the tax precentage", "Enter tax precentage here: ex. (20% = .2)"); 
    alert(`Your tax pay is ${taxed}`);
    
    var gross = Number(hourlyPay) * Number(hoursWorked);
    var taxedAmount = Number(gross) * Number(taxed) 
    var netPay = Number(gross) - Number(taxedAmount)
    console.log(`Your gross pay is  ${gross}.\nYour Taxed amount is  ${taxedAmount} .\nYour net pay is ${netPay}.`);
    var body = document.querySelector("body");
    var p = document.createElement('p');
    p.innerText = `Your gross pay is  ${gross}.\nYour Taxed amount is  ${taxedAmount} .\nYour net pay is ${netPay}.`;
    body.appendChild(p);
