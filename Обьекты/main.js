// 1. Calculator

var calculator = {
	firstNum : 0,
	secondNum : 0,
	read : function(){
		this.firstNum = prompt('Imput first number');
		this.secondNum = prompt('Imput second number');
	}
}

calculator.read();
console.log(calculator.firstNum);