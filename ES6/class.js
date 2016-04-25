/**
 * Created by Ray on 2016/4/25.
 */
"use strict";
class Card extends EventEmitter{
		constructor(id){
			super();
			this.id=id
		}
		getId(){
			return this.id;
		}
		setId(id){
			this.id=id;
		}
}


