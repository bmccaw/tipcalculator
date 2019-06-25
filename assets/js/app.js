document.addEventListener("DOMContentLoaded", (event) => {

	//define variables
	const billVal = document.querySelector(`#bill-val`).value;
	const tipPercent = document.querySelector(`#tip-percent`).value;
	const numPatrons = document.querySelector(`#num-patrons`).value;

const calculateTip = () => {
	

	console.log(billVal);
	console.log(tipPercent);
	console.log(numPatrons);

	//validate inputs
	if (billVal === "" || tipPercent == 0 || numPatrons <= 0) {
		alert("Please enter a valid value.");
		return;
	}

	//calculate the tip
	const total = (billVal * tipPercent) / numPatrons;
}
console.log(billVal);
	console.log(tipPercent);
	console.log(numPatrons);

document.querySelector(`#calc-tip`).addEventListener("click", event => {
	calculateTip()
})

});