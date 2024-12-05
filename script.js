document.addEventListener('DOMContentLoaded', function() {
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500]);
    }
    alert('¡Fuiste hackeado!');

    // Cambiar el color de fondo cada segundo
    setInterval(function() {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);

    // Reproducir un sonido
    var audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
