function loadApp() {

	// Create the flipbook

	$('.flipbook').turn({
		
			// Width
			
			width:922,
			
			// Height
			
			height:550,
			
			// Elevation
			
			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook
			
			autoCenter: true
	});
}	
	
function back(){//возврат на 1 страницу
	$('.flipbook').turn('page', '1');
	};
	
	function rounding(event){//запуск крутящихся огней
		$(".theEnd").addClass("theEndEmergence");
	$("#fire1").addClass("fireball1");
	$("#fire2").addClass("fireball2");
	event=event || window.event;
		target = event.target;
		$(target).removeAttr("onmouseover");
	}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['js/plugins/turn.js'],
	nope: ['js/plugins/turn.html4.min.js'],
	both: ['css/basic.css'],
	complete: loadApp
});
//запуск параллакс
		jQuery(document).ready(function(){
			// Declare parallax on layers
			jQuery('.parallax-layer').parallax({
				mouseport: jQuery("#port")
			});
		});