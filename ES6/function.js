/**
 * Created by Ray on 2016/4/22.
 */
"use strict";
//剩余参数
const add=(...num)=> {
	return num.length?num.reduce(function (prev,cur) {
		return prev+cur
	}):0;
};
console.log(add(1,2,3,4,5));
//默认参数
const preAdd=(a=1,b=2,...num)=>{
	return a+b+add(...num);
}
console.log(preAdd());
console.log(preAdd(10,20,...[40,50,60]));
//生成器
function* createNums(){
	for(let i=0;i<5;i++){
		yield 5*i;
	}
}
const generator=createNums();
let value=generator.next();
do{
	console.log(value)
	value=generator.next();
}while (!value.done);
