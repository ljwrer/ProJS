/**
 * Created by Ray on 2016/4/22.
 */
self.onmessage=function (event) {
	var data=event.data;
	data=data.reverse();
	self.postMessage(data);
};