//https://teachablemachine.withgoogle.com/models/V5ACQfPqn/





function start()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V5ACQfPqn/model.json',modelready);

}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults()
{
    
}