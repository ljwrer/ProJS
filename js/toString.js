'use strict'
//var o={
//	name:"ray"
//};
//write(o.constructor);
//write(o.hasOwnProperty(name));
//write(o.toString());
//write(o.valueOf());
//write(o++);
//write(o);
//write(-26%Infinity);
//write(true+"5");
////for(var name in window)
////{
////	write(name);
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
//write(s1+s2+s3);
function doAdd(num1,num2){
	"use strict"
	arguments[1]=10;
	arguments[1]=5;
	return num1+num2;
}
write(doAdd(1,2));

function func(a) {
    arguments[0] = 2
    write(arguments[0])
    write(a)// 2
}  
func(1);