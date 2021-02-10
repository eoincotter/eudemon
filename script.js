// Display hamburger dropdown when hamburger button clicked
function displayHamburgerDropdown(hamburgerButton) {
  hamburgerButton.classList.toggle("change");
  document.querySelector('.hamburger-dropdown').classList.toggle("change");
}

// Cognitive Fusion Questionnaire Calculator
function calculateScore() {
  var q1 = Number(document.forms["cognitive-fusion-questionnaire"]["q1"].value);
  var q2 = Number(document.forms["cognitive-fusion-questionnaire"]["q2"].value);
  var q3 = Number(document.forms["cognitive-fusion-questionnaire"]["q3"].value);
  var q4 = Number(document.forms["cognitive-fusion-questionnaire"]["q4"].value);
  var q5 = Number(document.forms["cognitive-fusion-questionnaire"]["q5"].value);
  var q6 = Number(document.forms["cognitive-fusion-questionnaire"]["q6"].value);
  var q7 = Number(document.forms["cognitive-fusion-questionnaire"]["q7"].value);
  var totalScore = q1 + q2 + q3 + q4 + q5 + q6 + q7;
  document.getElementById("CFQ-score-confirmation").innerHTML = `Your score: ${totalScore}`;
  document.getElementById("CFQ-score-confirmation").style.display = "inline";
  document.getElementById("CFQ-submit").style.display = "none";
  return false;
  }

// I am/I am not exercise input handler
function saveIAmInput(form) {
  input = form["i-am-input"].value;
  document.querySelector(`#${form.id} p`).innerHTML = `I am ${input}.`;
  document.querySelector(`#${form.id}-or-not`).innerHTML = `I am ${input}, `;
  document.querySelector(`#${form.id}-strike`).innerHTML = `I am <s>${input}</s>.`;
  return false;
  }

