"use strict";
const person={
	name:{
		firstName:"Ray",
		lastName:"Zone"
	},
	age:18
}
person.name.firstName="Rmaiy";
console.log(person.name.firstName);
person.name="Ray Zone";
console.log(person.name);
try{
	//noinspection JSAnnotator
	person="hello";
}catch (e){
	console.log(e.message)
}
for(let i=0;i<10;i++){

}
try {
	console.log(i)
}catch (e){
	console.log(e.message)
}
var list = document.getElementById("list");
for (var i = 1; i <= 5; i++) {
	var item = document.createElement("LI");
	item.appendChild(document.createTextNode("Item " + i));

	let j = i;
	item.onclick = function (ev) {
		console.log("Item " + j + " is clicked.");
	};
	list.appendChild(item);
}

