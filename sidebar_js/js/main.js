window.addEventListener('DOMContentLoaded', init);
function init() {
	showElem('.pop_menu', '.active_menu');
}

// /////////////

function showElem(par1, par2){
	let menu = document.querySelector(par1);
	let actElem = document.querySelector(par2);
	// console.log(menu);
	// console.log(actEl);
	actElem.addEventListener('click', function(){
		menu.classList.toggle('pop_menu--show');
	});
}