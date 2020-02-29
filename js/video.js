var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
	console.log("Play Video");

} 

function pauseVid() { 
	video.pause(); 
	console.log("Pause Video");
} 

function decreaseSpeed() { 
    video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
  	console.log("Speed is "+ video.playbackRate);

} 

function skipAhead() {
	if (video.currentTime + 60 > video.duration){
		video.currentTime = 0;
		video.pause();
		video.playbackRate = 1; 
}
	else{
		video.currentTime += 60;
	console.log("Current location is" + video.currentTime);
	}
}
	

function mute() { 
	 
	var mut = document.getElementById("mute");
	if (video.muted){
		mut.innerHTML = "mute";
		video.muted = false; 
		console.log("Unmute");
	}
	else{
		mut.innerHTML = "unmute"
		video.muted = true;
		console.log("Mute");
	}
}

function changeVolume() {
	document.querySelector("#volume").innerHTML = volume*100 + "%";
	var volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume; 
	console.log("Volume is " + volume * 100 );
}
       

function gray() { 

	console.log("In grayscale")
	video.classList.add("grayscale");
}

function color() {

	console.log("In color") 
	video.classList.remove("grayscale")
}

function advance(){
	if (video.currentTime == video.duration){
	video.pause();
	video.currentTime = 0;
	video.play();}




}