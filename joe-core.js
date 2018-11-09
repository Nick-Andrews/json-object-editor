/**
 * JSON tree walker object
 * @type {Object}
 */
var WK = {
	obj : null, 
	ID: null,
	path:[],
	nunode:null,
	nupath: [],
	keys: [],
	type: 0,
	loca: "",
	rel: null,
	/**
	 * add event actions to save and close buttons
	 * 
	 * @param  {int} id , current user id for authentication on data post
	 * @return {null}    
	 */
	dynamise: function(id){
		
		this.add_event(document.getElementById("close-report"), "click", function(){
			window.location.href = "?page="+WK.loca;
		})
		var t = document.getElementById("save-report-1234")
		this.add_event(t, "click", function(){
			var modelID = this.id.split("-")
			WK.saver(id, modelID[2]) ;
			///window.location.href = "?page="+WK.loca;
		});
	},
	/**
	 * UI method traverses JSON key value pairs to create DOM objects representing 
	 * a single nest level. 
	 * 
	 * @param  {object} obj  , DOM object represennting key
	 * @param  {object} wrap , DOM object parentNode also corresponding to key of nested object
	 * @return {null} 
	 */
	walk_obj: function(obj, wrap){
		if(Array.isArray(obj)){
			for( var i = 0 ; i < obj.length; i++){
				this.expose_obj( obj[i], wrap, i);
			}
		}else if(( typeof(obj)=="object")&&(obj != null)) {
			for (var key in obj) {
				if ( obj.hasOwnProperty(key)){
					this.expose_obj( obj[key], wrap, key);
				}
			}
		}
	},
	/**
	 * Multi-purpose switching method to manage actions[push, return, assign] on value in json object. 
	 * Method extends into depth of 10 nested key value pairs. 
	 * Additional depth traversal, if required, can be performed by simply 
	 * adding new switch case parameter incrementing integer array indices 
	 * i.e. case 10: ...this.obj[path[9]][path[8]]...
	 * 		case 11: ...this.obj[path[10]][path[9]]...
	 * 	"I want to find a better way to do this.. >Nick"
	 *  
	 * @param  {array} path, array of json keys pointing to json value being managed. 
	 *         Length of array corresponds to nested depth of key value pair.
	 * @param  {int|string|obj} val , value to be stored in json object
	 * @param  {int|null} action, 0 for push value to array, 1 for assign value, null for return value
	 * @return {null|int|string|obj}  pushing or assigning returns null, else key=>value returned
	 */
	manage_node: function(path, val, action){
		switch(path.length){
			case 1:
				if( val == null) return this.obj[path[0]];
				if( action== 0)this.obj[path[0]].push(val);
				if( action== 1)this.obj[path[0]]= val;
				
			break;
			case 2:
				if( val == null) return this.obj[path[1]][path[0]];
				if( action== 0)this.obj[path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[1]][path[0]]= val;
			break;
			case 3:
				if( val == null) return this.obj[path[2]][path[1]][path[0]];
				if( action== 0)this.obj[path[2]][path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[2]][path[1]][path[0]]= val;
			break;
			case 4:
				if( val == null) return this.obj[path[3]][path[2]][path[1]][path[0]];
				if( action== 0)this.obj[path[3]][path[2]][path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[3]][path[2]][path[1]][path[0]]= val;
			break;
			case 5:
				if( val == null) return this.obj[path[4]][path[3]][path[2]][path[1]][path[0]];
				if( action== 0)this.obj[path[4]][path[3]][path[2]][path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[4]][path[3]][path[2]][path[1]][path[0]]= val;
			break;
			case 6:
				if( val == null) return this.obj[path[5]][path[4]][path[3]][path[2]][path[1]][path[0]];
				if( action== 0)this.obj[path[5]][path[4]][path[3]][path[2]][path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[5]][path[4]][path[3]][path[2]][path[1]][path[0]]= val;
			break;
			case 7:
				if( val == null) return this.obj[path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]];
				if( action== 0)this.obj[path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]]= val;
			break;
			case 8:
				if( val == null) return this.obj[path[7]][path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]];
				if( action== 0)this.obj[path[7]][path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[7]][path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]]= val;
			break;
			case 9:
				if( val == null) return this.obj[path[8]][path[7]][path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]];
				if( action== 0)this.obj[path[8]][path[7]][path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]].push(val);
				if( action== 1)this.obj[path[8]][path[7]][path[6]][path[5]][path[4]][path[3]][path[2]][path[1]][path[0]]= val;
			break;
		}
		return null;
	},
	/**
	 * Generate random string used for DOM object id
	 * 
	 * @param  {int} len, number of chars to create string with
	 * @return {string}  randomized id string
	 */
	random_id: function(len){
		var str="";
		var range="_ABCDEFGHIJKLMNOPQRSTUVWXYZ_1234567890_abcdefghijklmnopqrstuvwxyz_";
		for( var i = 0 ; i < len; i++){
			str+= range.charAt( Math.floor(Math.random()*range.length) );
		}
		return str;
	},
	/**
	 * Javascript post to a static page 
	 * 
	 * @param  {int} id  , Unique ID of user
	 * @param  {int} modelID, Unique ID json object to be saved in DB
	 * @return {null} 
	 */
	saver: function(id, modelID){
		var f = document.createElement("form");
		f.setAttribute("method", "POST");
    		f.setAttribute("action", WK.loca);
		document.body.appendChild(f)
		var i = document.createElement("input");
		i.setAttribute("type", "hidden");
		i.setAttribute("name", "joe");
		i.value = JSON.stringify( this.obj ); 
		f.appendChild(i)
		f.submit();
	},
	/**
	 * Ajax post to server method for the modified json object that to be in a database
	 * 
	 * @param  {int} id  , Unique ID of user
	 * @param  {int} modelID, Unique ID json object to be saved in DB
	 * @return {null} 
	 */
	saver_ajax: function(id, modelID){
		function pack(){
			this.saveID;
			this.data;
		} 
		var p = new pack()
		p.data =  this.obj ;
		p.saveID = modelID;
		var d =  JSON.stringify( p )  
        var ajax = new XMLHttpRequest();    
		ajax.open("POST","?jsonmods="+this.type+"" ,true);
		console.log( "?jsonmods="+this.type+"");
		ajax.setRequestHeader('Content-Type', 'application/upload');
		ajax.send( d );
	},
	/**
	 * Recursive UI method that traverses the DOM representation of the json object in 
	 * reverse nested order to locate the key value pair that needs updating.
	 *   
	 * @param  {object} ob , DOM object with ID using hyphen-based naming syntax
	 * @param  {array} path, array of json object keys corresponding to json object nesting
	 * @param  {int|string|object} val , value to be written into object key position 
	 * @return {null} 
	 */
	backtrack_node: function(ob, path, val){
		if( !path )path = [];
		if( !ob.id)return;
		var k = ob.id.split("-");
		if( k[0] == "INIT"){
			this.manage_node(path, val, 1);
		}else{
			path.push(k[0]);
			this.backtrack_node(ob.parentNode, path, val)
		}	
	},
	/**
	 * Recursive UI method captures nesting of keys in json object corresponding
	 * to DOM representation of nesting structure
	 * 
	 * @param  {object} ob , DOM object with ID using a hyphen-based naming syntax
	 * @param  {array} path, array of json object keys corresponding to json object nesting
	 * @return {null} 
	 */
	unwind_path: function(ob, path){
		if( !path )path = [];
		if( !ob.id)return;
		var k = ob.id.split("-");
		if( k[0] == "INIT"){
			this.nupath =  path;
		}else{
			path.push(k[0]);
			this.unwind_path(ob.parentNode, path)
		}	
	},
	/**
	 * Creates a copy of an array value that is pushed onto array in different object branch 
	 * 
	 * @param  {string} id1 , DOM object id corresponding to JSON object key value pair to copy from 
	 * @param  {string} id2 , DOM object id corresponding to JSON object key value pair to copy to 
	 * @return {null}     
	 */
	copy_from_to: function(id1, id2){
		this.find_node(document.getElementById(id1))
		this.unwind_path(document.getElementById(id2))
		this.manage_node(this.nupath, this.nunode, 0);
	},
	/**
	 * Locates json key value pair using DOM object representation
	 * 
	 * @param  {object} ob, DOM object representing key value
	 * @param  {array} path, array of keys corresponding to nesting of json keys 
	 * @return {null}      
	 */
	find_node: function(ob, path){
		if( !path )path = [];
		if( !ob.id)return;
		var k = ob.id.split("-");
		if( k[0] == "INIT"){
			this.nunode = this.manage_node( path, null, null);
		}else{
			path.push(k[0]);
			this.find_node(ob.parentNode, path)
		}	
	},
	/**
	 * Checks DOM representation for existence of object having a particular class name. 
	 * If located returns a reference to the object
	 * 
	 * @param  {object} obj, DOM object
	 * @param  {string} clss, class name value object is tested for having
	 * @return {object|null} returns reference to object if located
	 */
	test_for_obj: function(obj, clss){
		if(( obj)&&( obj.childNodes)){
			for( var i = 0 ; i < obj.childNodes.length; i++){
				if( obj.childNodes[i].nodeName==="LI"){
					if( this.has_class( obj.childNodes[i], clss)){
						return obj;
					}
				}
			}
		}	
	},
	/**
	 * Method creates DOM objects representing key and values for JSON object branch level
	 * 
	 * @param  {object} obj, DOM object representing key in JSON object
	 * @param  {object} wrap, DOM object to place created elements within
	 * @param  {string|int} key, key for object nesting
	 * @return {null}     
	 */
	expose_obj: function(obj, wrap, key){	
		var nut, t, randy, nd, copyr, editr, temp;
		if(! wrap ){
			wrap = document.getElementById("modelwalker")
		}
		randy = "NODE"+this.random_id(17);
		if( typeof(key)=="undefined"){
			key = "INIT";
			this.obj = obj;
			if(wrap){ 
				nut = document.createElement("ul");
			}
		}else{
			nut = this.test_for_obj(wrap, "walker-node-"+key);
			if( !nut ) {
				nut = document.createElement("li");
			}
		}
		nut.setAttribute("class", "walker-node walker-node-"+key);
		nut.setAttribute("id", ""+key+"-"+randy);
		nut.self = this;
		wrap.appendChild(nut);
		nd = document.createElement("span");
		nd.self = this;
		if( key == 0 ){
			nd.innerHTML = 	"	&#9913;";
		}else{ 
			nd.innerHTML= (key=="INIT")?"":key;
		}
		nut.appendChild(nd);
		if(Array.isArray(obj)){
			nd.setAttribute("class", "array");
			if( obj.length == 0 )nd.setAttribute("class", "array empty");
		}else if(( typeof(obj)=="object")&&(obj != null)) {
			nd.setAttribute("class", "object");
			copyr = document.createElement("span")
			copyr.setAttribute("class", "copy-button")
			copyr.self = this;
			nut.appendChild(copyr)
		}else if (obj == null){
			editr = document.createElement("input");
			editr.setAttribute("type", "text");
			editr.value = obj;
			nut.innerHTML ="NULL "+key+": ";
			nut.appendChild( editr)
		}else{
			editr = document.createElement("input");
			editr.setAttribute("type", "text");
			editr.value = obj;
			editr.style.width= (obj.length*12)+"px";
			editr.case = typeof( obj);
			editr.self = this;
			function testint(n) {
 			  return n % 1 === 0;
			}
			this.add_event(editr, "change", function(){ 
				var v;
				if( this.case == "number" ){
					if( testint( this.value)  ){
						v= parseInt( this.value);
					}else{
						v= parseFloat( this.value);
					}
				}else{	
					v = this.value;
				}
				this.self.backtrack_node(this.parentNode,[], v);
			});
			nut.innerHTML =" &raquo; "+key+": ";
			this.add_class(nut, "editnode")
			nut.appendChild( editr)
		}
		this.add_event(nut, "click", function(ev){
			ev.stopPropagation();
			if( this.self.has_class(nut, "enabled")){
				t = nut.childNodes;
				for ( var i = t.length-1 ; i >= 0; i--){
					if(( typeof( t[i])==="object") && ( t[i].nodeName=="LI")){
						this.self.destroy_element( t[i])
					}
				}	
				nut.className = nut.self.remove_class(nut,"enabled")
				return;	
			}
			t = document.getElementsByClassName("similar");
			for ( var i = 0 ; i < t.length;i++){
				t[i].className =this.self.remove_class(t[i], "similar");
			}
			this.self.add_class(nut, "enabled");
			temp =  nut.className.split(" ");
			t = document.getElementsByClassName(temp[1]);
			for ( var i = 0 ; i < t.length;i++){
				this.self.add_class(t[i], "similar");
			}
			t = document.getElementsByClassName(temp[1]);
			for ( var i = 0 ; i < t.length;i++){
				if( t[i].nodeName == "SPAN")t[i].className = this.remove_class(t[i], "hot");
			}
			this.self.keys.push(key)
			this.self.walk_obj(obj, nut);
			t = document.getElementsByClassName("hot");
			for ( var i = 0 ; i < t.length;i++){
				if( t[i].nodeName == "SPAN")t[i].className =this.self.remove_class(t[i], "hot");
			}
		})
		if(key=="INIT"){
			t = document.getElementsByClassName(".walker-node");
			for ( var i = 0 ; i < t.length;i++){
				if( t[i].nodeName == "LI")this.add_class(t[i], "disabled");
				t[i].className =this.remove_class(t[i], "enabled");
			}
			this.add_class(nut, "enabled");
			this.keys.push(key)
			this.walk_obj(obj, nut);
		}
	},
	/**
	 * Recursive method to destroy child elements DOM object and itself
	 * 
	 * @param {object} obj, DOM object being destroyed
	 * @return {null}
	 */
	destroy_element: function ( obj ){
		if( obj.childNodes){
			var t = obj.childNodes;
			for ( var i = obj.childNodes.length-1; i >= 0; i--){
				if( obj.childNodes[i].length > 0){
					this.destroy_element( obj.childNodes[i] )
				}else if(obj.childNodes[i]){
					obj.removeChild( obj.childNodes[i]);
				}
			}
		}
		obj.parentNode.removeChild( obj );
	},
	/**
	 * Add class name to DOM object
	 * 
	 * @param {object} obj, DOM object to be modified
	 * @param {string} clss, class parameter to add
	 * @return {string}  modified class name string for DOM object
	 */
	add_class: function(obj, clss){
		if( !obj )return;
		var temp = obj.className.split(" ");
		while( temp.length > 0){
			if(( temp.pop() == clss)&&(typeof(clss=="string")))return;
		}
		obj.className +=" "+clss;
	},
	/**
	 * Test for existence of class parameter on specific DOM object
	 * 
	 * @param {object} obj, DOM object to be modified
	 * @param {string} clss, class parameter to add
	 * @return {bool}  true if obj has class parameter
	 */
	has_class: function(obj, clss){
		var temp = obj.className.split(" ");
		while( temp.length > 0){
			if(( temp.pop() == clss)&&(typeof(clss=="string")))return true;
		}
		return false;
	},
	/**
	 * Removes class parameter from DOM object
	 * 
	 * @param  {object} obj, DOM object being modified
	 * @param  {string} clss, class parameter to remove
	 * @return {string}  modified class name string for DOM object
	 */
	remove_class: function(obj, clss){
		var temp = obj.className.split(" ");
		var str="";
		var c ="";
		while( temp.length > 0){
			c = temp.pop();
			if(( c != clss)&&(typeof(clss=="string"))){
				str+=" "+c;
			}
		}
		return str;
	},
	/**
	 * Attaches event listener to object that triggers function call
	 *
	 * @param {object} elem, DOM Object event emitter
	 * @param {string} evtType, string that corresponds to an event type, i.e mousedown
	 * @param {function} func, javascript function method
	 *
	 *@return {null} 
	 */
	add_event: function(elem, evtType, func) {
		if (elem.addEventListener) {
			elem.addEventListener(evtType, func, false);
		}else if(elem.attachEvent) {
			elem.attachEvent("on" + evtType, func);
		}else{
			elem["on" + evtType] = func;
		}
	},
	/**
	 * Removes event listener to object triggering function call
	 *
	 * @param {object} elem, DOM Object event emitter
	 * @param {string} evtType, string that corresponds to an event type, i.e mousedown
	 * @param {function} func, javascript function method
	 *
	 *@return {null} 
	 */
	remove_event:function(elem, evtType, func) {
		if (elem.removeEventListener) {
			elem.removeEventListener(evtType, func, false);
		}else if(elem.detachEvent) {
			elem.detachEvent("on" + evtType, func);
		}else{
			elem["on" + evtType] = null;
		}
	}, 
}



