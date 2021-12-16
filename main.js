
 
function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}

song = "";
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function setup(){
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes)
}

function draw(){
image(video, 0, 0, 600, 500)
}
 

function play(){
song.play();
song.setVolume(1);
song.rate(1);

}
function modelloaded(){
console.log("posenet is initialised")
}
function gotposes(results){
if(results.length>0){
console.log(results)
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristx="+leftWristX+"leftWristY="+leftWristY);


rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristx="+rightWristX+"rightWristY="+rightWristY);
}
}