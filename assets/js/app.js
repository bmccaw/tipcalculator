document.addEventListener("DOMContentLoaded", (event) => {

const calculateTip = () => {
	
	//define variables
	const billVal = document.querySelector(`#bill-val`).value;
	const tipPercent = document.querySelector(`#tip-percent`).value;
	const numPatrons = document.querySelector(`#num-patrons`).value;
	let regex = new RegExp(/^(\d+)?([.]?\d{0,2})?$/);

	console.log(billVal);
	console.log(tipPercent);
	console.log(numPatrons);

	//validate inputs
	if (billVal === "" || tipPercent == 0 || numPatrons <= 0) {
		alert("Please enter a valid value.");
		return;
	}

	//regex check to insure billVal can only be a number with one decimal point
	if (regex.test(billVal) == false) {
		alert("Please enter a valid value.");
		return;
	}

	//calculate the tip
	let total = (billVal * tipPercent) / numPatrons;
	console.log(total);
	total = Math.round(total * 100) / 100;
	console.log(total);

	//display the result
	document.querySelector(`#tip-amount`).innerHTML = total;

}

document.querySelector(`#calc-tip`).addEventListener("click", event => {
	calculateTip()
})
});