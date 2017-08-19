console.log('Loaded!');

var element = document.getElementById('main-text'
);

element.innerHTML = "Hover over the image to zoom";

var img = document.getElementById('madi');
img.onmouseover = function() { 
    img.style.zoom = 1.5;
};
img.onmouseout = function() {
    img.style.zoom = 1;
};