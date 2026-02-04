const textarea = document.querySelector("#text");
const totalcaracter = document.querySelector("#total-characters");
const totalmots = document.querySelector("#word-counts");
const totalsentence = document.querySelector("#sentences-count");
const countspace = document.querySelector("#exclude-spaces");
const characterLimitCheckbox = document.querySelector("#character-limit");
const limitValueInput = document.querySelector("#limit-value");
let total = 0;
let sentence = 0;

// Fonction pour mettre à jour les compteurs
function updateCounters() {
	let textValue = textarea.value;
	
	// Compter les caractères (avec ou sans espaces)
	let charCount = textValue.length;
	if (countspace.checked) {
		charCount = textValue.replace(/\s/g, '').length;
	}
	totalcaracter.textContent = charCount;
	
	// Remplacer les retours à la ligne par des espaces
	let text = textValue.replace(/\n/g, ' ');
	
	// Compter les mots en ignorant les espaces consécutifs
	let words = text.trim().split(/\s+/).filter(word => word.length > 0);
	total = words.length;
	
	// Compter les phrases (. ? !) - ignorer les ponctuations consécutives
	for (let i = 0; i < textValue.length; i++) {
		if (textValue[i] == "." || textValue[i] == "?" || textValue[i] == "!") {
			// Vérifier si le caractère précédent n'est pas aussi une ponctuation
			if (i == 0 || (textValue[i-1] != "." && textValue[i-1] != "?" && textValue[i-1] != "!")) {
				sentence++;
			}
		}
	}
	
	totalmots.textContent = total;
	totalsentence.textContent = sentence;
	
	total = 0;
	sentence = 0;
}

// Événement pour le textarea
textarea.addEventListener("input", () => {
	// Vérifier la limite de caractères si activée
	if (characterLimitCheckbox.checked && limitValueInput.value) {
		let limit = parseInt(limitValueInput.value);
		if (textarea.value.length > limit) {
			textarea.value = textarea.value.substring(0, limit);
		}
	}
	
	updateCounters();
});

// Événement pour la checkbox "Exclude Spaces"
countspace.addEventListener("change", () => {
	updateCounters();
});

// Événement pour la checkbox "Set Character Limit"
characterLimitCheckbox.addEventListener("change", () => {
	if (characterLimitCheckbox.checked) {
		limitValueInput.style.display = "block";
	} else {
		limitValueInput.style.display = "none";
		limitValueInput.value = "";
	}
});

// Événement pour l'input de limite
limitValueInput.addEventListener("input", () => {
	if (characterLimitCheckbox.checked && limitValueInput.value) {
		let limit = parseInt(limitValueInput.value);
		if (textarea.value.length > limit) {
			textarea.value = textarea.value.substring(0, limit);
			updateCounters();
		}
	}
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
