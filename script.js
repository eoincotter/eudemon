let navOptions = document.querySelectorAll('li a');
let dropdown = document.querySelector('.dropdown');

let showDropdown = function() {
    dropdown.style.display = 'block';    
};

let reset = function() {
    dropdown.style.display = '';  
};

var i;
for (i = 0; i < navOptions.length; i++) {
  navOptions[i].addEventListener('mouseover', showDropdown);
  navOptions[i].addEventListener('mouseout', reset);
}

dropdown.addEventListener('mouseover', showDropdown);
dropdown.addEventListener('mouseout', reset);

function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.header-right-dropdown').classList.toggle("change");
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
