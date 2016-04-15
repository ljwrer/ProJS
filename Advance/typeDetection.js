function getConstructorName(obj) {
    return obj && obj.constructor && obj.constructor.toString().match(/function\s*([^/(]*)/)[1]
}
function getNativeConstructorName(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}
