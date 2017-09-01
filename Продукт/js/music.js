var playing = false;//музыка при загрузке не играет
var music = document.getElementById("player");
var playPauseButton = document.getElementsByClassName("navi")[2];

window.onload = function(){
//в зависимости от состояния проигрывания происходит остановка или игра музыки
music.volume = 0.5;
	playPauseButton.addEventListener("click", playPause);
	
	function playPause(){
		if(playing){
			pauseMusic();
		} 
		else{
			playMusic();
		}	
	}	
//остановка музыки, замена рисунка 
	function pauseMusic(){
		music.pause();
		playPauseButton.childNodes[0].setAttribute("src","image/buttons/play.png");
		playing = false;
	}
//проигрывание музыки, замена рисунка
	function playMusic() {
		music.play();
		playPauseButton.childNodes[0].setAttribute("src","image/buttons/pause.png");
		playing = true;
	}
}

function changeVolume(number, direction){//изменение громкости
	var music = document.getElementById("player");
	//учитываем диапазон звука от 0 до 1
	if(music.volume >= 0.1 && direction == 'down'){
		music.volume = (music.volume - number).toFixed(1);
		console.log(music.volume);
	}
	if(music.volume <= 0.9 && direction == 'up'){ 
		music.volume = (music.volume + number).toFixed(1);
		console.log(music.volume);
	}	
}