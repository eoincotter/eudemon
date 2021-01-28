let coursePanel = document.querySelector('.mindfulness-course-one');

let increaseSize = function() {
    coursePanel.style.height = '315px';  
    coursePanel.style.width = '236px';  
};

let reset = function() {
    coursePanel.style.height = '';  
    coursePanel.style.width = '';  
};

coursePanel.addEventListener('mouseover', increaseSize);
coursePanel.addEventListener('mouseout', reset);
