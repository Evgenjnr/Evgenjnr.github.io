window.addEventListener('DOMContentLoaded', init);
 let outPut       = document.querySelector('#output');
 let inputNumber = document.querySelector('#input');
function init () {
	let button = document.querySelector('.initButton')
	button.addEventListener('click', function (ev) {
		if(button.value == "Sort & Reverse"){
			let getNumber = document.querySelector('#input').value;		
			sortNreverse (getNumber);
			button.value = "Clear";
		}else{
			button.value = "Sort & Reverse";
			inputNumber.value = "";
			outPut.value = "";
		}
		
		
	});
	

}


function sortNreverse (inputNumber) {
	/*let x         = String(someNumber);//преобразование числа в строку
	let arr       = x.split('');//преобразование строки в массив
	let newArr    = [];//пустой массив
	newArr        = arr.sort().reverse();//сортируем массив по убыванию, 
	                                  //результат заносим в пустой массив
	let newString = newArr.join('');//преобразование массива в строку
	let newNumber = Number(newString);//преобразование строки в число*/


    let newArr = inputNumber.split('').sort().reverse().join('');
    let newNumber = Number(newArr);
    console.log(typeof(newNumber));

   
    if(inputNumber.value != "" && !isNaN(newNumber)){
    	outPut.value = newNumber;
    }else{
    	outPut.value = "Введите десятичное число";
    }
	
	
	

	// let secondPar       = document.createElement('p');
	// secondPar.innerHTML = newNumber;
	// document.body.appendChild(secondPar);
}
