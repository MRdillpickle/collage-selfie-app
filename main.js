var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    if (Content.toLowerCase() == "selfie") {
        speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Takeing you selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        img_id = "result1";
        take_snap();
        speak_data = "takeing next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function() {
        img_id = "result2";
        take_snap();
        speak_data = "takeing next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
    setTimeout(function() {
        img_id = "result3";
        take_snap();
    }, 20000);
}

function take_snap() {
    console.log(img_id);
    Webcam.snap(function(data_uri){
        document.getElementById(img_id).innerHTML = '<img id="selfie_image" src="' + data_uri + '">'
    });
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById('camera');