/**
 * Created by Ray on 2016/4/15.
 */
var getByClass=function () {
    if(document.getElementsByClassName){
        return function (ele,classes) {
            return ele.getElementsByClassName(classes);
        }
    }else {
        return function (ele,classes) {
            var classArray=classes.split(/\s+/);
            var children=[].slice.call(ele.getElementsByTagName("*"));
            children.filter(function (child) {
                var childClassName=child.className.split(/\s+/);
                return classArray.every(function (className) {
                    return !(childClassName.indexOf(className) == -1)
                })
            })
            return children;
        }
    }
}
var get=function (ele,classes) {
    var classArray=classes.trim().split(/\s+/);
    var children=[].slice.call(ele.getElementsByTagName("*"));
    return children.filter(function (child) {
        var childClassName=child.className.trim().split(/\s+/);
        return classArray.every(function (className) {
            return !(childClassName.indexOf(className) == -1)
        })
    })
}