const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
	//check if the shift key is down
	//and check that tey are checking it
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		//go ahead and do what we want
		//loop over every checkbox
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));