var dog=0;
var cow=0;
var cat=0;
var horse=0;
var lion=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VB0wQoKvX/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("detected").innerHTML="Detected Dog - "+dog+"Detected Cat - "+cat+"Detected Cow - "+cow+"Detected Horse - "+horse+"Detected Lion - "+lion;
        document.getElementById("detected").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        document.getElementById("result_label").innerHTML="Detected voice is of- "+results[0].label;
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        
        img=document.getElementById("animal_img");
        
        if(results[0].label=="Meowing"){
            img.src="cat.gif";
        }
        else if(results[0].label=="Barking"){
            img.src="dog.gif";
           dog= dog+1;
        } 
        else if(results[0].label=="Moo"){
           img.src="cow.gif";
           cow= cow+1;
        }
        else if(results[0].label=="Roaring"){
           img.src="lion.gif";
            lion= lion+1
        }
        else{
            img.src="horse.gif";
            horse= horse+1;
        }
        }
    }
