/**
 * Created by Ray on 2016/4/21.
 */
var process = function () {
};
var value = [],
    len = value.length,
    leftover = len % 8,
    iterations = Math.floor(len / 8),
    i=0;
if(leftover>0){
    do {
        process(value[i++])
    } while (--leftover > 0);
}
if(iterations>0){
    do{
        process(value[i++]);
        process(value[i++]);
        process(value[i++]);
        process(value[i++]);
        process(value[i++]);
        process(value[i++]);
        process(value[i++]);
        process(value[i++]);
    }while (--iterations>0);
}
function duff(arr,process) {
    var len = arr.length,
        leftover = len % 8,
        iterations = Math.floor(len / 8),
        i=0;
    if(leftover>0){
        do {
            process(value[i++])
        } while (--leftover > 0);
    }
    if(iterations>0){
        do{
            process(arr[i++]);
            process(arr[i++]);
            process(arr[i++]);
            process(arr[i++]);
            process(arr[i++]);
            process(arr[i++]);
            process(arr[i++]);
            process(arr[i++]);
        }while (--iterations>0);
    }
}

