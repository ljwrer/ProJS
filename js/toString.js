'use strict'
//var o={
//	name:"ray"
//};
//println(o.constructor);
//println(o.hasOwnProperty(name));
//println(o.toString());
//println(o.valueOf());
//println(o++);
//println(o);
//println(-26%Infinity);
//println(true+"5");
////for(var name in window)
////{
////	println(name);
////}
//var obj={
//	p1:1,
//	p2:2,
//	p3:3
//}
//with(obj){
//	var s1=p1;
//	var s2=p2;
//	var s3=p3;
//}
//println(s1+s2+s3);
function doAdd(num1,num2){
	"use strict"
	arguments[1]=10;
	arguments[1]=5;
	return num1+num2;
}
println(doAdd(1,2));

function func(a) {
    arguments[0] = 2
    println(arguments[0])
    println(a)// 2
}  
func(1);