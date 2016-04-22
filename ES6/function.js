/**
 * Created by Ray on 2016/4/22.
 */
var add=(...num)=> {
	return num.reduce(function (prev,cur) {
		return prev+cur
	})
};
console.log(add(1,2,3,4,5));