var createXHR=(function () {
    var create=function () {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                        "MSXML2.XMLHttp"],
                    i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {}
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error("No XHR object available.");
        }
    };
    return create;
})();
var createCORSRequestfunction =(function () {
   return function (method, url){
       var xhr = new XMLHttpRequest();
       if ("withCredentials" in xhr){
           xhr.open(method, url, true);
       } else if (typeof XDomainRequest != "undefined"){
           vxhr = new XDomainRequest();
           xhr.open(method, url);
       } else {
           xhr = null;
       }
       return xhr;
   }
})();


