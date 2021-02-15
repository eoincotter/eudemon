// Display hamburger dropdown when hamburger button clicked
function displayHamburgerDropdown(hamburgerButton) {
  hamburgerButton.classList.toggle("change");
  document.querySelector('.hamburger-dropdown').classList.toggle("change");
}

// Cognitive Fusion Questionnaire Calculator
function calculateCFQScore() {
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

  // Valued Living Questionnaire Calculator
function calculateVLQScore() {
  var q1 = Number(document.forms["VLQ-questionnaire"]["q1"].value);
  var q2 = Number(document.forms["VLQ-questionnaire"]["q2"].value);
  var q3 = Number(document.forms["VLQ-questionnaire"]["q3"].value);
  var q4 = Number(document.forms["VLQ-questionnaire"]["q4"].value);
  var q5 = Number(document.forms["VLQ-questionnaire"]["q5"].value);
  var q6 = Number(document.forms["VLQ-questionnaire"]["q6"].value);
  var q7 = Number(document.forms["VLQ-questionnaire"]["q7"].value);
  var q8 = Number(document.forms["VLQ-questionnaire"]["q8"].value);
  var q9 = Number(document.forms["VLQ-questionnaire"]["q9"].value);
  var q10 = Number(document.forms["VLQ-questionnaire"]["q10"].value);
  var q11 = Number(document.forms["VLQ-questionnaire"]["q11"].value);
  var q12 = Number(document.forms["VLQ-questionnaire"]["q12"].value);
  var q13 = Number(document.forms["VLQ-questionnaire"]["q13"].value);
  var q14 = Number(document.forms["VLQ-questionnaire"]["q14"].value);
  var q15 = Number(document.forms["VLQ-questionnaire"]["q15"].value);
  var q16 = Number(document.forms["VLQ-questionnaire"]["q16"].value);
  var q17 = Number(document.forms["VLQ-questionnaire"]["q17"].value);
  var q18 = Number(document.forms["VLQ-questionnaire"]["q18"].value);
  var q19 = Number(document.forms["VLQ-questionnaire"]["q19"].value);
  var q20 = Number(document.forms["VLQ-questionnaire"]["q20"].value);
  var q21 = Number(document.forms["VLQ-questionnaire"]["q21"].value);
  var q22 = Number(document.forms["VLQ-questionnaire"]["q22"].value);
  var q23 = Number(document.forms["VLQ-questionnaire"]["q23"].value);
  var q24 = Number(document.forms["VLQ-questionnaire"]["q24"].value);
  var domain1 = q1*q13
  var domain2 = q2*q14
  var domain3 = q3*q15
  var domain4 = q4*q16
  var domain5 = q5*q17
  var domain6 = q6*q18
  var domain7 = q7*q19
  var domain8 = q8*q20
  var domain9 = q9*q21
  var domain10 = q10*q22
  var domain11 = q11*q23
  var domain12 = q12*q24
  var compositeScore = Math.round((domain1 + domain2 + domain3 + domain4 + domain5 + domain6 + domain7 + domain8 + domain9 + domain10 + domain11 + domain12)/12)
  document.getElementById("VLQ-score-confirmation").innerHTML = `Your score: ${compositeScore}`;
  document.getElementById("VLQ-score-confirmation").style.display = "inline";
  document.getElementById("VLQ-submit").style.display = "none";
  return false;
  }

