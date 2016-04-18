function EventEmitter() {
    this.handlers={};
}
EventEmitter.prototype={
    constructor:EventEmitter,
    on:function (type,handler) {
        if(typeof this.handlers[type] === "undefined"){
            this.handlers[type]=[];
        }
        this.handlers[type].push(handler);
        return this;
    },
    emit:function (type,event) {
        if(!event.target){
            event.target=this;
        }
        if(Object.prototype.toString.call(this.handlers[type]).slice(8,-1)==="Array"){
            var handlers=this.handlers[type];
            for (var i=0;i<handlers.length;i++){
                handlers[i](event);
            }
        }
        return this;
    },
    remove:function (type,handler) {
        if(Object.prototype.toString.call(this.handlers[type]).slice(8,-1)==="Array"){
            for(var i=0;i<this.handlers[type].length;i++){
                if(this.handlers[type][i]===handler){
                    break;
                }
            }
        }
        this.handlers[type].splice(i,1);
        return this;
    }
};