var person=new Object();
person.name="Ray";
println(person.name);
var a="hello";
var b=a;
println(a);println(b);
b="world";
println(a);println(b);
var name="Ray";
name.age=23;
println(name.age);
var person2=person;
person2.age=23;
println(person.age);
var person3=new Object();
person3.name="Ray"
function setName(obj){
	obj.name="Ramiy";
}
setName(person3);
println(person3.name);
function setName2(obj){
	obj.name="Moon";
	obj=new Object();
	obj.name="Rmoony";
}
var person4=new Object();
setName2(person4);
println(person4.name);
println(person instanceof Object);
println(new Array() instanceof Array);
println(typeof println);
println(println instanceof Function);
var reg=new RegExp("[abc]");
println(typeof reg);
println(reg instanceof Object);
println(reg instanceof RegExp);
println(type(reg));