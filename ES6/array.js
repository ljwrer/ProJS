/**
 * Created by Ray on 2016/4/25.
 */
"use strict";
//迭代器
const person = ["Nicholas", 29];
let personIterator=person[Symbol.iterator]();
let value=personIterator.next();
do{
	console.log(value)
	value=personIterator.next();
}while (!value.done);
let zeroesForeverIterator = {
	[Symbol.iterator]: function () {
		return this;
	},
	next: function () {
		return {done: false, value: 0};
	}
};
//数组领悟
// var numbers = [0,1,2,3,4,5,6,7,8,9,10];
// var ripledOdds=[ i*3 for each (i in numbers)];
// ripledOdds.forEach(console.log);
//解构赋值
(function () {
	let arr= ["color", "red"];
	let [name, value] =arr;
	let [,value2]=arr;
	console.log(name);
	console.log(value);
	console.log(value2);
})();
(function () {
	var value1 = 5;
	var value2 = 10;
	[value2, value1] = [value1, value2];
	console.log(value1);
	console.log(value2);
})();
(function () {
	let person={
		name:"Ray",
		age:18
	};
	let {name:name,age:age} = person;
	console.log(name);
	console.log(age);
})();
