document.addEventListener('DOMContentLoaded', function() {
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500]);
    }
    alert('¡Fuiste hackeado!');

    // Solicitar acceso a la cámara
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                var video = document.getElementById('video');
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log("Error al acceder a la cámara: " + err);
            });
    }
});
