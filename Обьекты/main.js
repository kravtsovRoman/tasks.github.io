// 1. Calculator

var calculator = {

	 firstNum : 0,
	secondNum : 0,

	read : function(){
		this.firstNum = prompt('Imput first number');
		this.secondNum = prompt('Imput second number');
	},

	suma : function(){
		return new Number(this.firstNum) + Number(this.secondNum);
	},
	mul : function(){
		return new Number(this.firstNum) * Number(this.secondNum);
	}
}

calculator.read();
console.log( calculator.suma() );
console.log( calculator.mul() );