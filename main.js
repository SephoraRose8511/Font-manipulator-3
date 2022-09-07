function setup() {
    canvas = createCanvas(800, 400);
    canvas.position(450, 150);
    canvas.background("grey");

    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(30, 50);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

leftWristx = "";
rightWristx = "";

function gotposes(result) {
    if(result.length > 0){
        console.log(result);

    leftWristx = result[0].pose.leftWrist.x;   
    rightWristx = result[0].pose.rightWrist.x;   
    }
}

function draw() 
{   background('#969A97');

    fill('#F90093');
    stroke('#F90093');
    text("Hello", 400, 200)
    textSize(25);
    difference = leftWristx - rightWristx;
    textSize(difference);
    console.log(leftWristx);
    console.log(rightWristx);

}


