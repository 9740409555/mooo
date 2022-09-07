function preload() {
    clown=loadImage("https://i.postimg.cc/5NB39b8r/mosthache.png");

}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses );
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

 function gotPoses (results) 
 {
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x-15;
noseY = results[0].pose.nose.y+15;
console.log("nose x = " + noseX );
console.log("nose y = " + noseY );


}

 }


function draw() {
image(video, 0,0,300,300);
fill(255,0,0);
stroke(255,10,10);
//circle(noseX, noseY, 20);
image(clown,noseX,noseY,30,30);

}

function take_snapshot() {
    save('myFilterImage.png');
}
