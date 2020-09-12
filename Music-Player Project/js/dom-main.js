
/*------------------------------Audios-----------------------------------------------*/

var song1 = new Audio();
song1.src = "./music/m1.mp3";

var song2 = new Audio();
song2.src = "./music/m2.m4a";

var song3 = new Audio();
song3.src = "./music/m3.m4a";

var song4 = new Audio();
song4.src = "./music/m4.m4a";

var song5 = new Audio();
song5.src = "./music/m5.m4a";

var song6 = new Audio();
song6.src = "./music/m6.m4a";

var song7 = new Audio();
song7.src = "./music/m7.m4a";

var song8 = new Audio();
song8.src = "./music/m8.m4a";

var song9 = new Audio();
song9.src = "./music/m9.m4a";



/*------------------------------------------------------------------------------------*/
var length = document.querySelectorAll(".songs").length;
var a;
let id;
for(var i= 0; i<length;i++){
	a = document.querySelectorAll(".songs")[i];
	a.addEventListener('click',playSong);

	var b = document.querySelectorAll(".songs")[i].addEventListener('dblclick',pauseSong);
}

document.querySelector("#Play").addEventListener("click",playOrPause());


//functions------------------------------
function playOrPause(){
	if(song1.play() || song2.play())
	{
		this.setAttribute("src","./images/playButton.png");
		song1.pause();
	}
	else{
		this.setAttribute("src","./images/pauseButton.png");
		song1.play();
	}
}


function playSong(){	
	var dis = document.querySelector(".details");
	dis.style.display = "block";
	id = this.innerHTML
	console.log(id);
	switch(id){
			case "song 1":
				document.querySelectorAll(".content")[0].style.display = "block";
				song1.play();
				break;
			case "song 2":
				document.querySelectorAll(".content")[1].style.display = "block";
				song2.play();
				break;
			case "song 3":
				document.querySelectorAll(".content")[2].style.display = "block";
				song3.play();
				break;
			case "song 4":
				document.querySelectorAll(".content")[3].style.display = "block";
				song4.play();
				break;
			case "song 5":
				document.querySelectorAll(".content")[4].style.display = "block";
				song5.play();
				break;
			case "song 6":
				document.querySelectorAll(".content")[5].style.display = "block";
				song6.play();
				break;
			case "song 7":
				document.querySelectorAll(".content")[6].style.display = "block";
				song7.play();
				break;
			case "song 8":
				document.querySelectorAll(".content")[7].style.display = "block";
				song8.play();
				break;
			case "song 9":
				document.querySelectorAll(".content")[8].style.display = "block";
				song9.play();
				break;
			default:
				console.log("try another one");

	}
		
}


function pauseSong(){
	console.log("-----------close-------------");
	console.log(id);
	var dispalyID = this.innerHTML;
	console.log(dispalyID);
	switch(dispalyID){
		case "song 1":
			document.querySelectorAll(".content")[0].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song1.pause();
			break;
		case "song 2":
			document.querySelectorAll(".content")[1].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song2.pause();
			break;
		break;
		case "song 3":
			document.querySelectorAll(".content")[2].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song3.pause();
			break;
		
		case "song 4":
			document.querySelectorAll(".content")[3].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song4.pause();
			break;
		
		case "song 5":
			document.querySelectorAll(".content")[4].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song5.pause();
			break;
		
		case "song 6":
			document.querySelectorAll(".content")[5].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song6.pause();
			break;
		
		case "song 7":
			document.querySelectorAll(".content")[6].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song7.pause();
			break;
		
		case "song 8":
			document.querySelectorAll(".content")[7].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song8.pause();
			break;

		case "song 9":
			document.querySelectorAll(".content")[8].style.display = "none";
			document.querySelector(".details").style.display = "none";
			song9.pause();
			break;
		default:
			console.log("choose any song");
	}

}