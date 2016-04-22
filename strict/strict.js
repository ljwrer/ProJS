/**
 * Created by Ray on 2016/4/22.
 */
"use strict";
//noinspection
window.onerror = function(message){
	alert(message);
	return false;
};
try{
	//noinspection JSUnresolvedVariable
	message="hello";
}catch (e){
	console.log(e);
}
try{
	var a="hello";
	//noinspection BadExpressionStatementJS,JSAnnotator
	// delete a;
}catch (e){
	console.log(e);
}
try{
	//noinspection JSDuplicatedDeclaration
	var obj={
		name:"ray",
		name:"Rmaiy"
	}
}catch (e){
	console.log(e);
}
try {
	//noinspection JSAnnotator,JSDuplicatedDeclaration
	// function add(num,num) {
	// 	return num+num
	// }
	// console.log(add(1,2));
}catch (e){
	console.log(e)
}
try {
	//noinspection JSAnnotator
	function showValue(value){
		value = "Foo";
		console.log(value);
		console.log(arguments[0]);
	}
	showValue("Hi");
}catch (e){
	console.log(e)
}
try {
	//noinspection JSAnnotator
	function factorial(num){
		if (num <= 1) {
			return 1;
		} else {
			//noinspection JSAnnotator
			return num * arguments.callee(num-1)
		}
	}
	var result=factorial(5);
}catch (e){
	console.log(e)
}
try {
	// var yield=10;
}catch (e){
	console.log(e)
}
try{
	if(true){
		//noinspection JSAnnotator
		function foo() {
			console.log(1);
		}
		foo();
	}
}catch (e){
	console.log(e);
}
try{
	//noinspection JSAnnotator
	function bar(){
		eval("var x=10");
		console.log(x);
	}
	bar();
}catch (e){
	console.log(e);
}
try{
	var result = eval("var x=10, y=11; x+y");
	console.log(result); //21
}catch (e){
	console.log(e);
}
try {
	var color = "red";
	//noinspection JSAnnotator
	function displayColor(){
		console.log(this.color);
	}
	displayColor();
}catch (e){
	console.log(e);
}
try {
	var color = "red";
	//noinspection JSAnnotator
	function displayColor(){
		console.log(this.color);
	}
	displayColor.call(null);
}catch (e){
	console.log(e);
}
try {
	var color = "red";
	//noinspection JSAnnotator
	function displayColor(){
		console.log(this.color);
	}
	displayColor.call(window);
}catch (e){
	console.log(e);
}
try{
	// with(location){
	// 	console.log(href);
	// }
}catch (e){
	console.log(e);
}
try{
	// var no=010;
}catch (e){
	console.log(e);
}
try{
	var no2=parseInt("010");
	console.log(no2)
}catch (e){
	console.log(e);
}
