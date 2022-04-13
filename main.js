leftwristx = 0
leftwristy = 0
rightwristx = 0
rightwristy = 0
song = ""

function preload(){
    song = loadSound("music.mp3")    
}

function setup(){
  canvas = createCanvas(600,500)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('poseNet is loaded')
}

function gotPoses(){
    if(results.length>0){
        console.log(results)
        leftwristx = results[0].pose.leftWrist.x
        leftwristy = results[0].pose.leftWrist.y
        console.log(leftwristx)
        console.log(leftwristy)
    }
}

function draw(){
    image(video,0,0,600,500)
}

function click(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}