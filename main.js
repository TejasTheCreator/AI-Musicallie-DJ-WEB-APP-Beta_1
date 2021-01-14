peter_pan_song = "";
harry_potter_song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload()
{
peter_pan_song = loadSound("Peter_Pan_song.mp3");
harry_potter_song = loadSound("Harry_Potter_DJ_Theme_song.mp3");
}

function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture();
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet is intiallized successfully!");
}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
}
}

function draw()
{
image(video,0,0,400,300);
fill("#2b2b2b");
stroke("#2b2b2b");
}