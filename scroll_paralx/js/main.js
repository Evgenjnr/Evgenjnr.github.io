$(function(){

	let viewport, container, scrlbr, body; 

	$(document).ready(function(){
     	viewport 	    = $('.viewport');
	 	container 	    = $('.container');
	 	scrlbr 			= $('.scrlbr');

		calc();

		$(window).on('resize', function() {

				  calc();
		});

	});

function calc(){
	let viewportHeight 	= viewport.innerHeight();
	let contentHeight 	= container.innerHeight();
	let multiplier      = (viewportHeight *100)/contentHeight;
	


	console.log('viewportHeight' +' ' + viewportHeight);
	console.log('contentHeight' + ' ' + contentHeight);
	console.log('multiplier' + ' ' + multiplier);


    
	if (contentHeight <= viewportHeight) {
		$(scrlbr).hide();
	}
	else {
		$(scrlbr).height(((viewportHeight * multiplier)/100)-2);
	}
	let scrHght = $(scrlbr).height();

	console.log('высота бегунка' + ' ' + scrHght);


		
		$(viewport).scroll(function(){
		    let i 	= $(this).scrollTop();
			console.log('scrollTop' + ' ' + i);
			$(scrlbr).css({transform:`translateY(${(i * multiplier)/100}px)`});
		});
}
	body = $('body');
	$(body).mousemove(function(ev){
		let x = ev.pageX;
		let y = ev.pageY;
		console.log(x);
		console.log(y);
		$('.bgimg').css({left :`${-(x /100)}px`});
	});
	$(body).mouseleave(function(){
		
		$('.bgimg').css({left :`0px`});
	});
		
	
});
