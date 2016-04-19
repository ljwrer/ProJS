/**
 * Created by Ray on 2016/4/19.
 */
var cookieUtil = (function () {
    var get = function (name) {
        var cookieValue = null;
        var cookie = document.cookie;
        var cookieName = encodeURIComponent(name) + "=";
        var cookieStart = cookie.indexOf(cookieName);
        if (cookieStart >= 0) {
            var cookieEnd = cookie.indexOf(";", cookieStart);
            if (cookieEnd < 0) {
                cookieEnd = cookie.length;
            }
            cookieValue=decodeURIComponent(cookie.slice(cookieStart+cookieName.length,cookieEnd))
        }
        return cookieValue;
    };
    var getCookie=function () {
        var cookie={};
        var all=document.cookie;
        if(all === "") return cookie;
        var cookieArray=all.split("; ");
        for(var i=0;i<cookieArray.length;i++){
            var unit=cookieArray[i].split("=");
            var name=decodeURIComponent(unit[0]);
            var value=decodeURIComponent(unit[1]);
            cookie[name]=value;
        }
        return cookie;
    };
    var set=function (name,value,expires,path,domain,secure) {
        var cookie=encodeURIComponent(name)+"="+encodeURIComponent(value);
        if(expires instanceof  Date){
            cookie+="; expires="+expires.toGMTString();
        }
        if(path){
            cookie+="; path="+path;
        }
        if(domain){
            cookie+="; domain"+domain;
        }
        if(secure){
            cookie+="; secure"+secure;
        }
        document.cookie=cookie;
    }
    var remove=function (name,path,domain) {
        set(name,"",new Date(0),path,domain);
    }
    var unset=function (name,path,domian) {
        document.cookie=encodeURIComponent(name)+"= ; path"+path+"; domain="+domian+"; max-age=0"
    }
    return {
        get:get,
        getCookie:getCookie,
        set:set,
        remove:remove
    }
})();