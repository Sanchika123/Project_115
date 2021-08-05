function preload(){

}

function setup(){
    canvas= createCanvas(400, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model Loaded!")
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("x value:"+ result[0].pose.nose.x);
        console.log("y value:"+ result[0].pose.nose.y);
    }
}


function draw(){
    image(video, 0, 0, 400, 300);
}

function take_snapshot(){
    save("downloaded_img.png");
}



     
    

   
