

autoSlider();
var left = 0;
var timer;


function autoSlider(){
    timer = setTimeout(function(){
        var polosa = document.getElementById('polosa');
        left = left -8.2;
        if (left < -82){
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + 'vw';
        autoSlider();
    }, 2000);
}
