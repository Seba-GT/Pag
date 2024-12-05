document.addEventListener('DOMContentLoaded', function() {
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500]);
    }
    alert('¡Fuiste hackeado!');
});
