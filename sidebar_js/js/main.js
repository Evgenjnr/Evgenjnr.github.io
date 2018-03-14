window.addEventListener('DOMContentLoaded', init);
function init() {
	showElem('.pop_menu', '.active_menu', 'pop_menu--show');
}

 let computedStyle = getComputedStyle(document.querySelector('.page_footer'));
 let computed = getComputedStyle(document.querySelector('.pop_menu'));
 let footHeight = computedStyle.height;
 let menuHeight = computed.height;
 console.log(menuHeight);
 let setElHeight = document.querySelector('.pop_menu');
 setElHeight.style.height = 'menuHeight - footHeight';

// /////////////

function showElem(par1, par2, par3){
	let menu = document.querySelector(par1);
	let actElem = document.querySelector(par2);
	// console.log(menu);
	// console.log(actEl);
	actElem.addEventListener('click', function(){
		menu.classList.toggle(par3);
	});
}