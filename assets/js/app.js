document.addEventListener("DOMContentLoaded", event => {
  const calculateTip = () => {
    //define variables
    const billVal = document.querySelector(`#bill-val`).value;
    const tipPercent = document.querySelector(`#tip-percent`).value;
    const numPatrons = document.querySelector(`#num-patrons`).value;
    const regex = new RegExp(/^(\d+)?([.]?\d{0,2})?$/);

    console.log(billVal);
    console.log(tipPercent);
    console.log(numPatrons);

    //validate inputs
    if (billVal === "") {
		document.querySelector(`#err-bill`).style.visibility = "visible";
	}
	
	//regex check to insure billVal can only be a number with one decimal point
    else if (regex.test(billVal) == false) {
		document.querySelector(`#err-bill`).style.visibility = "visible";
    }

	else if (tipPercent == 0) {
		document.querySelector(`#err-percent`).style.visibility = "visible";
    }

	else if (numPatrons <= 0) {
		document.querySelector(`#err-patron`).style.visibility = "visible";
      return;
    } else {

    //calculate the tip
    let total = (billVal * tipPercent) / numPatrons;
    console.log(total);
    //round the total to the nearest two decimal places
    total = Math.round(total * 100) / 100;
    console.log(total);
    //insure that the result always has two digits following the decimal point
    total = total.toFixed(2);
    console.log(total);

    //display the result
    document.querySelector(`#tip-amount`).innerHTML = total;
	document.querySelector(`#result`).style.visibility = "visible";
	document.querySelector(`#err-bill`).style.visibility = "hidden";
	document.querySelector(`#err-percent`).style.visibility = "hidden";
	document.querySelector(`#err-patron`).style.visibility = "hidden";
	}
  };

  //run the function on button click
  document.querySelector(`#calc-tip`).addEventListener("click", event => {
    calculateTip();
  });
});
