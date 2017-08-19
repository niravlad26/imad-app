console.log('Loaded!');

var element = document.getElementById('main-text'
);

element.innerHTML = "Ha Ha Ha";

var img = document.getElementById('madi');
img.onclick = function() { 
    img.style.webkit-transform: scale(1.5),
    img.style.moz-transform: scale(1.5),
    img.style.o-transform: scale(1.5),
    img.style.ms-transform: scale(1.5),
    transform: scale(1.5),
};
