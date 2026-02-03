const textarea = document.querySelector("#text");
const totalcaracter = document.querySelector("#total-characters");
const totalmots = document.querySelector("#word-counts");
const totalsentence = document.querySelector("#sentences-count");
const countspace = document.querySelector("#exclude-spaces");
let total = 0;
let sentence = 0;

textarea.addEventListener("input", () => {
	totalcaracter.textContent = textarea.value.length;
	console.log(textarea.value);
	total++;
	for (let i = 0; i < textarea.value.length; i++) {
		if (textarea.value[i] == " " || textarea.value[i] == "") {
			total++;
		} else if (textarea.value[i] == ".") {
			sentence++;
		}
		totalmots.textContent = total;
		totalsentence.textContent = sentence;
	}
	total = 0;
	sentence = 0;
	// let lolll = lol(textarea.value);
	// totalsentence.textContent = lolll;
});
// countspace.addEventListener("change", () => {
// 	let lolll = lol(textarea.value);
// 	totalsentence.textContent = lolll;
// });

// function lol(lol) {
// 	let totale = lol.length;
// 	for (let i = 0; i < lol.length; i++) {
// 		if (lol[i] == " " && countspace.checked) {
// 			totale--;
// 		}
// 	}
// 	return totale;
// }
