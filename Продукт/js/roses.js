var arr = [[300,420],[200,130],[150,300],[420,70],[600,170],[650,390],[350,240]];//координаты цветков
var k = 0;

//добавляем изображения при открытии попап
function roses(){
	var tmp = document.getElementsByClassName("zadanie")[1];
	for(var j=0; j<7; j++){
		var item = '<img class="roses" src="image/flowers/rose.png" alt="rose" style="left:'+arr[j][0]+'px; top:'+arr[j][1]+'px" onclick="newImg(event);"/>';
		tmp.insertAdjacentHTML("beforeBegin",item);
	}
}
//меняем имеющиеся изображения на новые
 function newImg(event){
	event = event || window.event;
	target = event.target || event.srcElement || window.event.originalTarget;
	//target.setAttribute("src","image/flowers/flower"+k+".png");//неправильно работает в ie11
	$(target).attr("src","image/flowers/flower"+k+".png");
	target.style.animation = "flower 2s forwards";
	target.style.filter = "drop-shadow(0 0 1px black)";
	target.removeAttribute("onclick");
	target.style.cursor="default";
	k++;
	if (k==7){
		var tmp = document.getElementById("popup2").getElementsByTagName("h2")[0];
		tmp.setAttribute("class","firstText");	
		tmp.style.animationDelay = "1s";
		k=0;
	}
 }
//удаляем созданные изображения при закрытии попап
function vozvrat(){
	for(var j=0; j<7; j++){
		document.getElementsByClassName("roses")[0].parentNode.removeChild(document.getElementsByClassName("roses")[0]);
	}
	var tmp = document.getElementById("popup2").getElementsByTagName("h2")[0];
	tmp.removeAttribute("class");	
} 