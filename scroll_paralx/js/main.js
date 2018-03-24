$(window).on('resize load', function() {
	let viewportHeight 	= $('.viewport').innerHeight();
	let contentHeight 	= $('.container').innerHeight();
	let multiplier      = (viewportHeight *100)/contentHeight;
	


	console.log('viewportHeight' +' ' + viewportHeight);
	console.log('contentHeight' + ' ' + contentHeight);
	console.log('multiplier' + ' ' + multiplier);


    
	if (contentHeight <= viewportHeight) {
		$('.scrlbr').hide();
	}
	else {
		$('.scrlbr').height(((viewportHeight * multiplier)/100)-2);
	}
	let scrHght = $('.scrlbr').height();
	console.log(scrHght);


		
	$('.viewport').scroll(function(){
		    let i 	= $(this).scrollTop();
			console.log(i);
			$('.scrlbr').css({transform:`translateY(${(i * multiplier)/100}px)`});
	});

	$('body').mousemove(function(ev){
		let x = ev.pageX;
		let y = ev.pageY;
		console.log(x);
		console.log(y);
		$('.bgimg').css({left :`${-(x /100)}px`});
	});
	$('body').mouseleave(function(){
		
		$('.bgimg').css({left :`0px`});
	});
		
	
});