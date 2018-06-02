window.addEventListener('DOMContentLoaded', reverseNumber);
let someNumber = 5103851;
function reverseNumber () {
	let x         = String(someNumber);//преобразование числа в строку
	let arr       = x.split('');//преобразование строки в массив
	let newArr    = [];//пустой массив
	newArr        = arr.sort().reverse();//сортируем массив по убыванию, 
	                                  //результат заносим в пустой массив
	let newString = newArr.join('');//преобразование массива в строку
	let newNumber = Number(newString);//преобразование строки в число


	let firstPar       = document.createElement('p');
	firstPar.innerHTML = someNumber;
	document.body.appendChild(firstPar);

	let secondPar       = document.createElement('p');
	secondPar.innerHTML = newNumber;
	document.body.appendChild(secondPar);
}
