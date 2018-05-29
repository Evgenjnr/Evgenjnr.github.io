"use strict";

window.addEventListener("DOMContentLoaded", init);

var menuBtn = document.querySelector(".bar_menu"),
    mainHeader = document.querySelector(".main_header"),
    sectionElmn = document.querySelectorAll("section"),
    btnShow = document.querySelectorAll("button"),
    navItem = document.querySelectorAll(".nav_item");
function init() {
	//global set topPadding for each section element eq height of header element
	var setPadding = function padTop() {
		var paddTop = getComputedStyle(mainHeader).height;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = sectionElmn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				item.style.paddingTop = paddTop;
			}
			// */end set topPadding for each section element eq height of header element
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	};
	var setColor = function setColor() {
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = sectionElmn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var showElm = _step2.value;

				if (showElm.getBoundingClientRect().top >= 0 && showElm.getBoundingClientRect().top < 600) {
					var sectionInView = showElm.getAttribute("data-name");
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = navItem[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var target = _step3.value;

							if (target.getAttribute("data-name") == sectionInView) {

								target.firstChild.classList.add("active--item");
							} else {
								target.firstChild.classList.remove("active--item");
							}
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	};

	window.addEventListener("load", setPadding);
	window.addEventListener("resize", setPadding);
	window.addEventListener("scroll", setColor);

	// hide/show navMenu in header for mobile	
	menuBtn.addEventListener("click", function () {
		var menuList = document.querySelector(".nav_list");
		if (menuList.classList.contains("nav_list--show")) {
			menuList.classList.remove("nav_list--show");
		} else {
			menuList.classList.add("nav_list--show");
		}
	});
	// */end hide/show navMenu in header for mobile	


	viewSection(navItem);
	viewSectionOnBttn(btnShow);
}
// */end init

//add event 'click' for each element of navItem in header and footer,
// also button in top_section 
// and scroll section element with data-name eq data-name navItem inTo view
function viewSectionOnBttn(par1) {
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = par1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var target = _step4.value;

			target.addEventListener("click", function (ev) {
				var targetAttr = this.getAttribute("data-name");
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = sectionElmn[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var showElm = _step5.value;

						if (showElm.getAttribute("data-name") == targetAttr) {
							showElm.scrollIntoView({ behavior: "smooth" });
						}
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			});
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}
}

function viewSection(par1) {
	var _iteratorNormalCompletion6 = true;
	var _didIteratorError6 = false;
	var _iteratorError6 = undefined;

	try {
		for (var _iterator6 = par1[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
			var target = _step6.value;

			target.addEventListener("click", function (evnt) {
				evnt.preventDefault();
				var siblings = this.parentNode.children;
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {
					for (var _iterator7 = siblings[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var item = _step7.value;

						if (item.firstChild.classList.contains("active--item")) {
							item.firstChild.classList.remove("active--item");
						}
						this.firstChild.classList.add("active--item");
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}

				var targetAttr = this.getAttribute("data-name");
				var _iteratorNormalCompletion8 = true;
				var _didIteratorError8 = false;
				var _iteratorError8 = undefined;

				try {
					for (var _iterator8 = sectionElmn[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
						var showElm = _step8.value;

						if (showElm.getAttribute("data-name") == targetAttr) {
							showElm.scrollIntoView({ behavior: "smooth" });
						}
					}
				} catch (err) {
					_didIteratorError8 = true;
					_iteratorError8 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion8 && _iterator8.return) {
							_iterator8.return();
						}
					} finally {
						if (_didIteratorError8) {
							throw _iteratorError8;
						}
					}
				}

				if (window.matchMedia("screen and (max-width: 620px) and (orientation: portrait)").matches) {
					this.parentNode.classList.remove("nav_list--show");
				}
			});
		}
	} catch (err) {
		_didIteratorError6 = true;
		_iteratorError6 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion6 && _iterator6.return) {
				_iterator6.return();
			}
		} finally {
			if (_didIteratorError6) {
				throw _iteratorError6;
			}
		}
	}
}

// end*/ add event 'click' for each element of navItem in header and footer 
// and scroll section element with data-name eq data-name navItem inTo view