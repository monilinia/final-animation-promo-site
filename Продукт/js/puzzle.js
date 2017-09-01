var newarr = [[0,0],[0,100],[0,200],[100,0],[100,100],[100,200],[200,0],[200,100],[200,200]];//координаты элеменов паззла
var size =  9, firstArr = [], finishArr = [];

$(document).ready(function(){

	$(".preview img").click(function (event) {//выбор картинки
		$("#promo").removeClass("promo");
		$("#popup5 h2, form").removeClass("firstText");
		
		for(var i=1; i<10; i++){//очистка уже заполненного паззла
			$("#drop"+i+"").css({"background-image":"none","background-size":0});
		}
		
		var noticeList = document.getElementsByTagName("form")[0].querySelectorAll(".valid");
		
		for (var i = 0; i<noticeList.length; i++){
			noticeList[i].parentNode.removeChild(noticeList[i]);
		}
		
		$("#myemail").css({"border":"1px solid #033"});
		var count = 0;//для подсчета количества правильно перетянутых элементов паззла
		event=event || window.event;
		var tmp = $(this).attr("id");//определяем, какая из картинок выбрана
 
		for(var i=1; i<10; i++){//задаем каждому элементу фоновое изображение
			$("#drag"+i+"").css({"background-image":"url(image/"+tmp+"/img"+i+".jpg)","background-size":"100px 100px"});
		};
	
		for(var i = 0; i <= size; i++) {//вспомогательный массив для случайного определения порядка элементов паззла
			firstArr.push(i);
		}

		for(var i = 0; i <= size; i++) {//создаем новый массив с случайным порядком 9 цифр
			var value =  firstArr.splice(Math.floor(Math.random() * ((size-i) - 1) + 1),1);
			finishArr.push(value.pop());
		}
		console.log(finishArr);
		for(var i=0; i<9; i++){//распределяем элементы паззла по координатам
			$("#drag"+finishArr[i]+"").css({"top":newarr[i][1],"left":newarr[i][0]});
		}
		finishArr = [];//очищаем массив с случайными цифрами для возможности поиграть еще

	 
		//проверяем соответствие каждого элемента паззла конечному правильному положению, если паззл собран, при count=9, появляется форма с е-мэйлом и сообщение о скидке
		$(".photo").draggable();

		$(".photo").draggable({ revert: "invalid" });

		$("#drop1").droppable({
			accept: "#drag1",
			drop: function( event, ui ) {
				$("#drop1").css({"background-image":"url(image/"+tmp+"/img1.jpg)","background-size":"100px 100px"});
				$("#drag1").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop2").droppable({
			accept: "#drag2",
			drop: function( event, ui ) {
				$("#drop2").css({"background-image":"url(image/"+tmp+"/img2.jpg)","background-size":"100px 100px"});
				$("#drag2").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop3").droppable({
			accept: "#drag3",
			drop: function( event, ui ) {
				$("#drop3").css({"background-image":"url(image/"+tmp+"/img3.jpg)","background-size":"100px 100px"});
				$("#drag3").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop4").droppable({
			accept: "#drag4",
			drop: function( event, ui ) {
				$("#drop4").css({"background-image":"url(image/"+tmp+"/img4.jpg)","background-size":"100px 100px"});
				$("#drag4").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop5").droppable({
			accept: "#drag5",
			drop: function( event, ui ) {
				$("#drop5").css({"background-image":"url(image/"+tmp+"/img5.jpg)","background-size":"100px 100px"});
				$("#drag5").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop6").droppable({
			accept: "#drag6",
			drop: function( event, ui ) {
				$("#drop6").css({"background-image":"url(image/"+tmp+"/img6.jpg)","background-size":"100px 100px"});
				$("#drag6").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop7").droppable({
			accept: "#drag7",
			drop: function( event, ui ) {
				$("#drop7").css({"background-image":"url(image/"+tmp+"/img7.jpg)","background-size":"100px 100px"});
				$("#drag7").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop8").droppable({
			accept: "#drag8",
			drop: function( event, ui ) {
			   $("#drop8").css({"background-image":"url(image/"+tmp+"/img8.jpg)","background-size":"100px 100px"});
				$("#drag8").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
		$("#drop9").droppable({
			accept: "#drag9",
			drop: function( event, ui ) {
				$("#drop9").css({"background-image":"url(image/"+tmp+"/img9.jpg)","background-size":"100px 100px"});
				$("#drag9").css({"background-image":"none"});
				count++;
				if (count===9){
					$("#popup5 h2, form").addClass("firstText");
					$("#popup5 .firstText").css({"animation-delay":"1s"});
				}
			}
		});
	});
});

function sbros(){//обнуление всего при выходе из popup
	for(var i=1; i<10; i++){
		$("#drop"+i+"").css({"background-image":"none"});
		$("#drag"+i+"").css({"background-image":"none"});
	}
	$("#promo").removeClass("promo");
	$("#popup5 h2, form").removeClass("firstText");//при правильно заполненном e-mail сообщение о скидке и форма пропадают
	$("form")[0].reset();//очистка формы
	var noticeList = document.getElementsByTagName("form")[0].querySelectorAll(".valid");
	for (var i = 0; i<noticeList.length; i++){
		noticeList[i].parentNode.removeChild(noticeList[i]);
	}
	$("#myemail").css({"border":"1px solid #033"});
			
}

function get20(formS){ //
	var noticeList = formS.querySelectorAll(".valid");
	for (var i = 0; i<noticeList.length; i++){
		noticeList[i].parentNode.removeChild(noticeList[i]);
	}
	
	var corrMail = isCorrectMail(formS.myemail);
	return corrMail;
	
}

function isCorrectMail(text){//правильность написания email
	var myRe = /^\w+@\w+\.[a-z]{2,3}$/i;
	
	if (myRe.test(text.value.trim())){
		text.style.border = "1px solid #033";
		$("#popup5 h2, form").removeClass("firstText");//при правильно заполненном e-mail сообщение о скидке и форма пропадают
		$("form")[0].reset();//очистка формы
		$("#promo").addClass("promo");
		return true;
	}
	text.style.border = "2px solid red";
	var tmp = document.createElement("label");
	tmp.setAttribute("class","valid");
	tmp.innerHTML = "Проверьте правильность написания e-mail";
	text.parentNode.insertBefore(tmp,text.nextSibling);
	return false;
	}