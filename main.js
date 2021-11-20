//https://teachablemachine.withgoogle.com/models/bdR9roSRc/model.json

function setup(){
    canvas= createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bdR9roSRc/model.json",model_loded)

}

function draw(){
    image(video,0,0,300,300)
    classifier.classify(video,got_results)
}

function got_results(error,results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
        document.getElementById("name_result").innerHTML=results[0].label
        persent=results[0].confidence*100
        document.getElementById("Accuracy_result").innerHTML=persent.toFixed(2)+" %"
        
    }

}

function model_loded(){
    console.log("model_loaded succesfully")

}