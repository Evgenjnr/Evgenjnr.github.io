window.addEventListener('DOMContentLoaded', init);

let menuBtn     = document.querySelector('.bar_menu'),
	sectionElmn = document.querySelectorAll('section'),
	mainHeader  = document.querySelector('.main_header'),
	btnToDown   = document.querySelector('.btn_dwn'),
	btnDownLd   = document.querySelector('.bnt_dwnld'),
	btnFeature  = document.querySelector('.bnt_features'),
	navItem     = document.querySelectorAll('.nav_item a');
function init () {
	let setPadding = function paddTop() {
		let paddTop = getComputedStyle(mainHeader).height;
		for (let i = 0; i< sectionElmn.length; i++) {
		sectionElmn[0].style.paddingTop = paddTop;
	}
	}

	window.addEventListener('load', setPadding);
	window.addEventListener('resize', setPadding);
	
	
		
	menuBtn.addEventListener('click', function () {
		let menuList = document.querySelector('.nav_list');
		if(menuList.classList.contains('nav_list--show')){
		   menuList.classList.remove('nav_list--show');
		}else{
		   menuList.classList.add('nav_list--show');
		}
		
	});
	for(let target of navItem){
		target.addEventListener('click', function(){
						event.preventDefault();
			let targetAttr = this.getAttribute('data-name');
			for (let showElm of sectionElmn) {
				if(showElm.getAttribute('data-name') == targetAttr){
				let paddTop = getComputedStyle(mainHeader).height;
				showElm.style.paddingTop = paddTop;
				showElm.scrollIntoView({behavior: 'smooth'});
				}
			}
		});
	}


	btnDownLd.addEventListener('click', function () {
		let actionElm = document.querySelector('.download');
		let paddTop = getComputedStyle(mainHeader).height;
		actionElm.style.paddingTop = paddTop;
		actionElm.scrollIntoView({behavior: 'smooth'});
	});
	btnFeature.addEventListener('click', function () {
		let actionElm = document.querySelector('.features');
		let paddTop = getComputedStyle(mainHeader).height;
		actionElm.style.paddingTop = paddTop;
		actionElm.scrollIntoView({behavior: 'smooth'});
	});
	btnToDown.addEventListener('click', function () {
		let actionElm = document.querySelector('.widjet');
		let paddTop = getComputedStyle(mainHeader).height;
		actionElm.style.paddingTop = paddTop;
		actionElm.scrollIntoView({behavior: 'smooth'});
	});
	
	
}
