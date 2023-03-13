    var yourfirstName = prompt("Please tell me your first name.", "Enter first name here.");
    var hourlyPay = prompt("Please enter your hourly pay", "Enter your hourly pay here:");  
    alert(`Your hourly pay is ${hourlyPay}`);
    var twoWeeks = prompt("How many hours do you work in 2 weeks?")
    
    alert(`Hours worked is  ${twoWeeks}`);
    var taxed = prompt("Enter the tax precentage", "Enter tax precentage here: ex. (20% = .2)"); 
    alert(`Your tax pay is ${taxed}`);
    
    var gross = Number(hourlyPay) * Number(twoWeeks);
    var taxedAmount = Number(gross) * Number(taxed) 
    var netPay = Number(gross) - Number(taxedAmount)
    console.log(`Your gross pay is  ${gross}.\nYour Taxed amount is  ${taxedAmount} .\nYour net pay is ${netPay}.`);
    var body = document.querySelector("body");
    var p = document.createElement('p');
    p.innerText = `Your gross pay is  ${gross}.\nYour Taxed amount is  ${taxedAmount} .\nYour net pay is ${netPay}.`;
    body.appendChild(p);
