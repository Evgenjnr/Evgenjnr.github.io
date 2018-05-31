window.addEventListener("DOMContentLoaded", init);

let menuBtn = document.querySelector(".bar_menu"),
mainHeader  = document.querySelector(".main_header"),
sectionElmn = document.querySelectorAll("section"),
btnShow     = document.querySelectorAll("button"),
navItem     = document.querySelectorAll(".nav_item"),
menuList    = document.querySelector(".nav_list");
function init () {
	let headroom  = new Headroom(mainHeader);
    headroom.init();

	let setPadding = function paddTop() {
    let paddTop = getComputedStyle(mainHeader).height;
    for (let item of sectionElmn) {
           item.style.paddingTop = paddTop;
    }
}

	let setColor = function(){
		for (let showElm of sectionElmn) {
				if(showElm.getBoundingClientRect().top >= 0 
					&& showElm.getBoundingClientRect().top < 500){
					let sectionInView = showElm.getAttribute("data-name");
				  for(let target of navItem){				  	
				  	if(target.getAttribute("data-name") == sectionInView){
				  		
				  		target.firstChild.classList.add("active--item");				  	
				  		}else{
				  			target.firstChild.classList.remove("active--item");
				  		}
				  	}
				  
				}
			}
		}
    
     window.addEventListener("load", setPadding);
	 window.addEventListener("resize", setPadding);
	window.addEventListener("scroll", setColor);
	
	// window.addEventListener("scroll", hideHider);

	
	// hide/show navMenu in header for mobile

	menuBtn.addEventListener("click", function () {
		
		if(menuList.matches("nav_list--show")){
		   menuList.classList.remove("nav_list--show");
		}else{
		   menuList.classList.add("nav_list--show");
		   document.body.style.overflow = "hidden";
		}
		
	});

	
	// */end hide/show navMenu in header for mobile	

    
	viewSection(navItem);
	viewSectionOnBttn(btnShow);
	hideMenu();
}
// */end init

//add event 'click' for each element of navItem in header and footer,
// also button in top_section 
// and scroll section element with data-name eq data-name navItem inTo view
function viewSectionOnBttn(par1){
		for(let target of par1){
			target.addEventListener("click", function(ev){
				let targetAttr = this.getAttribute("data-name");
				for (let showElm of sectionElmn) {
					if(showElm.getAttribute("data-name") == targetAttr){
					showElm.scrollIntoView({behavior: "smooth", block:"start"});
					// let paddTop = getComputedStyle(mainHeader).height;
					// showElm.style.paddingTop = paddTop;
					}
				}
				
			});
		}
	}
//add event 'click' for each element of navItem in header and footer
	function viewSection(par1){
		for(let target of par1){
			target.addEventListener("click", function(evnt){
							evnt.preventDefault();
				document.body.style.overflow = "visible";
				let siblings = this.parentNode.children;
				for(let item of siblings){
					if(item.firstChild.matches("active--item")){
						item.firstChild.classList.remove("active--item");
					}
						this.firstChild.classList.add("active--item");
				}
				
				let targetAttr = this.getAttribute("data-name");
				for (let showElm of sectionElmn) {
					if(showElm.getAttribute("data-name") == targetAttr){
					showElm.scrollIntoView({behavior:"smooth", block:"start"});
					// let paddTop = getComputedStyle(mainHeader).height;
					// showElm.style.paddingTop = paddTop;
					}
				}
				if(window.matchMedia("screen and (max-width: 724px) and (orientation: portrait)").matches){
					this.parentNode.classList.remove("nav_list--show");
					
				}
				
			});
		}
	}
	
// end*/ add event 'click' for each element of navItem in header and footer 
// and scroll section element with data-name eq data-name navItem inTo view
function hideMenu () {
if(window.matchMedia("screen and (max-width: 724px) and (orientation: portrait)").matches){
    menuList.addEventListener("click", function(){
        if(menuList.classList.contains("nav_list--show")){
            menuList.classList.remove("nav_list--show");
        }
	
    });
}
}
