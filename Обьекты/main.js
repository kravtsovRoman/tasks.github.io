// 1. Calculator

// var calculator = {

// 	 firstNum : 0,
// 	secondNum : 0,

// 	read : function(){
// 		this.firstNum = prompt('Imput first number');
// 		this.secondNum = prompt('Imput second number');
// 	},

// 	suma : function(){
// 		return new Number(this.firstNum) + Number(this.secondNum);
// 	},
// 	mul : function(){
// 		return new Number(this.firstNum) * Number(this.secondNum);
// 	}
// }

// calculator.read();
// console.log( calculator.suma() );
// console.log( calculator.mul() );


// 2. ladder, chain method

var ladder = {
	step: 0,

	up: function(){
		this.step++;
		return this;
	},
	down: function(){
		this.step--;
		return this;

	},
	showStep: function(){
		console.log(this.step);
		return this;
	}
};

ladder.up().up().up().up().down().down().showStep();
ladder.up().up().up().up().down().down().showStep();
ladder.up().up().up().up().down().down().showStep();