var person=new Object();
person.name="Ray";
write(person.name);
var a="hello";
var b=a;
write(a);write(b);
b="world";
write(a);write(b);
var name="Ray";
name.age=23;
write(name.age);
var person2=person;
person2.age=23;
write(person.age);
var person3=new Object();
person3.name="Ray"
function setName(obj){
	obj.name="Ramiy";
}
setName(person3);
write(person3.name);
function setName2(obj){
	obj.name="Moon";
	obj=new Object();
	obj.name="Rmoony";
}
var person4=new Object();
setName2(person4);
write(person4.name);
write(person instanceof Object);
write(new Array() instanceof Array);
write(typeof write);
write(write instanceof Function);
var reg=new RegExp("[abc]");
write(typeof reg);
write(reg instanceof Object);
write(reg instanceof RegExp);
write(type(reg));