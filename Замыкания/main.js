// 1. Сумма через замыкание
// function sum(a){
// 	return function(b){
// 		return a+b;
// 	}
// }
// console.log(sum(5)(50));


// 2. Функция - строковый буфер хахахаха

// function  makeBuffer(){
// 	var arr = '';
// 	return function(string){
// 		string = string || "";
// 		return arr += string + " ";
// 	}
// 	return arr;
// }

// var buffer = makeBuffer();
// buffer("Hello");
// buffer("Admin");
// buffer("I am a");
// buffer("Boris");
// buffer("Britva");
// console.log(buffer());


// 3. sort-by-field

var users = [{
	name: "Вася",
	surname: 'Иванов',
	age: 33
}, {
	name: "Петя",
	surname: 'Чапаев',
	age: 55
}, {
	name: "Маша",
	surname: 'Медведева',
	age: 15
}];

function byField(field) {
	return function (a, b) {
		return a[field] > b[field] ? 1 : -1;
	}
}

users.sort(byField('name'));

users.forEach(function (user) {
	console.log(user.name, user.age);
});



