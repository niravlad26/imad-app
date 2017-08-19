console.log('Loaded!');

var element = document.getElementById('main-text'
);

element.innerHTML = "Ha Ha Ha";

var img = document.getElementById('madi');
img.onmouseover = function() { 
    img.style.zoom = 1.5;
};
img.onmouseout = function() {
    img.style.zoom = 0.667;
};