window.addEventListener('DOMContentLoaded', init);

let menuBtn     = document.querySelector('.bar_menu'),
	sectionElmn = document.querySelectorAll('section'),
	mainHeader  = document.querySelector('.main_header'),
	btnToDown   = document.querySelector('.btn_dwn'),
	btnDownLd   = document.querySelector('.bnt_dwnld'),
	btnFeature  = document.querySelector('.bnt_features'),
	navItem     = document.querySelectorAll('.nav_item a');
function init () {

	//set topPadding for each section element eq height header element
	let setPadding = function paddTop() {
		let paddTop = getComputedStyle(mainHeader).height;
		for (let i = 0; i< sectionElmn.length; i++) {
		sectionElmn[i].style.paddingTop = paddTop;
	}
	}


	window.addEventListener('load', setPadding);
	window.addEventListener('resize', setPadding);
	
	// */end set topPadding for each section element eq height header element
	// hide/show navMenu in header for mobile	
	menuBtn.addEventListener('click', function () {
		let menuList = document.querySelector('.nav_list');
		if(menuList.classList.contains('nav_list--show')){
		   menuList.classList.remove('nav_list--show');
		}else{
		   menuList.classList.add('nav_list--show');
		}
		
	});
	// */end hide/show navMenu in header for mobile	

	//add event 'click' for each element of navItem in header and footer 
	// and scroll section element with data-name eq data-name navItem inTo view
	
		for(let target of navItem){
			target.addEventListener('click', function(ev){
							ev.preventDefault();
				let targetAttr = this.getAttribute('data-name');
				for (let showElm of sectionElmn) {
					if(showElm.getAttribute('data-name') == targetAttr){
					// setPaddingTop (mainHeader, showElm);
					showElm.scrollIntoView({behavior: 'smooth'});
					}
				}
			});
		}
		// end*/ add event 'click' for each element of navItem in header and footer 
	// and scroll section element with data-name eq data-name navItem inTo view
	
	scrllElmnt(btnDownLd, '.download');
	scrllElmnt(btnFeature, '.features');
	scrllElmnt(btnToDown, '.widjet');	
	

	// function setPaddingTop (mainElm, targElm) {
	// 	let paddTop = getComputedStyle(mainElm).height;
	// 	targElm.style.paddingTop = paddTop;
	// }

	// function scrolling element after click on button in top_section

	function scrllElmnt (elm1, elm2) {
		elm1.addEventListener('click', function () {
		let actionElm = document.querySelector(elm2);
		// setPaddingTop (mainHeader, actionElm);
		actionElm.scrollIntoView({behavior: 'smooth'});
		});
	}

	// end*/ function scrolling element after click on button in top_section

}
// {behavior: 'smooth'}