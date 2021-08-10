Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("live");
Webcam.attach('#live');

function picture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("caught").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zZds2NUyA/model.json", modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function identify() {
    garv = document.getElementById('captured_image');
    classifier.classify(garv, gotResult);


function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results)
        document.getElementById("thing").innerHTML = results[0].label;
        document.getElementById("ac").innerHTML = results[0].confidence.toFixed(2);        
    }
}
}