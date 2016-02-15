/**
 * Created by Ray on 2016/1/18.
 */
var queryToObject=(function (){
    var queryToObject=function(){
        var queryString=location.search.length>0?location.search.substring(1):"";
        var queryArray=queryString.split("&");
        var ret={};
        var name=null;
        var value=null;
        var i;
        var len=queryArray.length;
        var item;
        for(i=0;i<len;i++){
            item=queryArray[i].split("=");
            name=decodeURIComponent(item[0]);
            value=decodeURIComponent(item[1]);
            if(name.length){
                ret[name]==value;
            }
        }
        queryArray.forEach(function(item){

        });
        return ret;
    };
    return queryToObject;
})();