function write(value){
	document.write(value+"<br>");
}
function type(value){
	var result;
	if(typeof value!=="object")
	{
		result=typeof value;
	}
	else if(value===null)
	{
		result="null";
	}else 
	{
		switch(true)
		{
			case value instanceof Array:
				result="Array";
				break;
			case value instanceof RegExp:
				result="RegExp";
				break;
			case value instanceof Date :
				result="Date";
				break;
			case value instanceof Math:
				result="Math";
				break;
			case value instanceof Function:
				result="Function";
				break;
			case value instanceof Event:
				result="Event";
				break;
			default:
				result="unKnow";
				break;
		}
	}
	return result;
}
