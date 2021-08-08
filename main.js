noseX= 0;
noseY= 0;

function preload(){
nose_image= loadImage('https://i.postimg.cc/L8XWWnBW/m.png');
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function gotPoses(result){
if(result.length > 0){
    console.log(result);
    noseX= result[0].pose.nose.x - 20 
    noseY= result[0].pose.nose.y -5
}
 }

function modelLoaded(){
    console.log("model Loaded!")
}

function draw(){
image(video, 0, 0, 300, 300);
image(nose_image, noseX, noseY, 40, 40)
}

function take_snapshot(){
    save("downloaded_img.png");
}



     
    

   
