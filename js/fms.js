/**
 *
 *
 * @author Lei Jiawang
 * @module
 */
var fms=require("fms");
fms.run();
fms.ajax({
    url:"/test/",
    type:"get",
    res:{
        ok:"yes",
        error:"no"
    }
})