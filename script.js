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