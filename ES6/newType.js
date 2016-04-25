/**
 * Created by Ray on 2016/4/25.
 */
//代理
function Stack() {
	let stack=[];
	const allowed=["pop","push","length"]
	return new Proxy({},{
		get:function (receiver,name) {
			if(allowed.indexOf(name)>-1){
				if(typeof stack[name] === "function"){
					return stack[name].bind(stack);
				}else {
					return stack[name];
				}
			}else {
				return undefined;
			}
		}
	})
}
const stack=new Stack();
stack.push(1,2,3);
console.log(stack[0]);
console.log(stack.length);
//Map Set
{
	let map=new Map();
	map.set("name","ray");
	map.set("age",18);
	console.log(map.get("name"));
	const set=new Set();
	set.add("color");
	console.log(set.has("color"));
}
//WeakMap
{
	let key = {},
		map = new WeakMap();
	map.set(key, "Hello!");
//解除对键的引用，从而删除该值
	key = null;
	console.log(map.get(key));
}
//StructType
// {
// 	var Size = new StructType({ width: uint32, height: uint32 })
// }
