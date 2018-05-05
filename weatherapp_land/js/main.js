window.addEventListener('DOMContentLoaded', init);

let menuBtn     = document.querySelector('.bar_menu'),
	sectionElmn = document.querySelectorAll('section'),
	mainHeader  = document.querySelector('.main_header'),
	btnToDown   = document.querySelector('.nav-to-bottom span'),
	btnDownLd   = document.querySelector('.btn-dwld'),
	btnFeature   = document.querySelector('.btn-ftrs');
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
		let menuList = document.querySelector('.header_nav');
		if(menuList.classList.contains('show--list')){
		   menuList.classList.remove('show--list');
		}else{
		   menuList.classList.add('show--list');
		}
		
	});

	btnDownLd.addEventListener('click', function () {
		let actionElm = document.querySelector('.download_wrap');
		let paddTop = getComputedStyle(mainHeader).height;
		actionElm.style.paddingTop = paddTop;
		actionElm.scrollIntoView();
	});
	btnFeature.addEventListener('click', function () {
		let actionElm = document.querySelector('.features');
		let paddTop = getComputedStyle(mainHeader).height;
		actionElm.style.paddingTop = paddTop;
		actionElm.scrollIntoView();
	});
	btnToDown.addEventListener('click', function () {
		let actionElm = document.querySelector('.widjet');
		actionElm.scrollIntoView();
	});
	
	
}
