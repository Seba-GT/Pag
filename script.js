document.addEventListener('DOMContentLoaded', function() {
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500]);
    }
    alert('¡Fuiste hackeado!');

    // Reproducir un sonido
    var audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.addEventListener('canplaythrough', function() {
        audio.play();
    });
});
