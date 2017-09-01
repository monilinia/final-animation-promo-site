	/*запуск прелоадера*/
	$(window).load(function() {
		setTimeout(function() {
			$('#preloader').fadeOut('slow', function() {});
		}, 6000);
	
	setTimeout(function() {/*запуск дудл-логотипа через 7 секунд после начала загрузки страницы*/
		$("<img id='logotip1' src='image/gif_swf/logo_Flash48.gif' alt='logotip'>").appendTo("#logotip");
	},7000);
  
	setTimeout(function() {/*постепенное исчезание дудл-логотипа */
		$("#logotip1").fadeOut('slow', function() {});
    }, 12000);
	
	setTimeout(function() {/*появление переливающегося логотипа*/
		$("#logotip2").fadeIn('slow', function() {});
		$("#logotip2").css({"opacity":1});
	}, 12000);
	
	setTimeout(function() {/*появление  и исчезание инструкции*/
		$(".fon .nadpisi").attr("id","rules");
	}, 13000);
});

