window.addEventListener('DOMContentLoaded', init);
 let outPut       = document.querySelector('#output');
 let inputString = document.querySelector('#input');

function init () {
	let button = document.querySelector('.initButton')
	button.addEventListener('click', function (ev) {
		if(button.value == "Sort & Reverse"){
		let getNumber = inputString.value;		
			sortNreverse (getNumber);
			button.value = "Clear";
		}else{
			button.value = "Sort & Reverse";
			inputString.value = "";
			outPut.value = "";
		}
		
		
	});
}
function sortNreverse (inputNumber) {
	let newArr = inputNumber.split('').sort().reverse().join('');
    let newNumber = Number(newArr);
	    if(inputNumber != '' && inputNumber != 0 && inputNumber > 11 && !isNaN(newNumber)){
	    	outPut.value = newNumber;
	    }else if(inputNumber == '' || isNaN(newNumber)){
	    	outPut.value = "Введите десятичное число";
	    }else if(inputNumber <= 11){
	    	outPut.value = "Число должно быть больше 11";
	    }
	/*let x         = String(someNumber);//преобразование числа в строку
	let arr       = x.split('');//преобразование строки в массив
	let newArr    = [];//пустой массив
	newArr        = arr.sort().reverse();//сортируем массив по убыванию, 
	                                  //результат заносим в пустой массив
	let newString = newArr.join('');//преобразование массива в строку
	let newNumber = Number(newString);//преобразование строки в число*/
	// let secondPar       = document.createElement('p');
	// secondPar.innerHTML = newNumber;
	// document.body.appendChild(secondPar);
}
