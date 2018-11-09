/**
 * Generate a sample object to demonstrate the JSON OBJECT EDITOR   
 * @type {Object}
 */
var SAMPLE = {
	sampleID: 131117,
	name: "DOM Representation of a JSON object using Canadian Military ranks and some random data",
	units: [],
	minister: "Right Honourable H. S.",
	Governor_General: "Her Excellency J. P.",
}

function department(){
	name=null;
	title=null;
	address=null;
	budget=null;
	officers=[];
	log= new Date();
}

function officer(){
	name=null;
	rank=null;
	command=[];
	division=null,
	log=new Date();
}

var divisions= ["Army","Navy","Air Force"];
var addr = ["1239 Defence Way Blvd, Capital City, Wingsland WL7a-67D",
"78 Landslock Square, Captial City North, Wingsland TE9x-07S",
"2878 Crypton Street, Captial City South, Wingsland AWW8-08AF",
"324 Banks Road, Captial City , Wingsland WYE-90WR",
"913 Mainway Highway N, Captial City , Wingsland WHW-765S"];

var navy_ranks = [
"Admiral (Adm)",
"Vice-Admiral (VAdm)",
"Rear-Admiral (RAdm)",
"Commodore (Cmdre)",
"Captain(N) (Capt(N))",
"Commander (Cdr)",
"Lieutenant-Commander (LCdr)",
"Lieutenant(N) (Lt(N))",
"Sub-Lieutenant (SLt)",
"Acting Sub-Lieutenant (A/SLt)",
"Naval Cadet (NCdt)",
"Chief Petty Officer 1st class(CPO 1)",
"Chief Petty Officer 2nd class(CPO 2)",
"Petty Officer 1st class(PO 1)",
"Petty Officer 2nd class(PO 2)",
"Master Seaman (MS)",
"Leading Seaman (LS)",
"Able Seaman (AB)",
"Ordinary Seaman (OS)"
];

var ranks=[
"General (Gen)",
"Lieutenant-General (LGen)",
"Major-General (MGen)",
"Brigadier-General (BGen)",
"Colonel (Col)",
"Lieutenant-Colonel (LCol)",
"Major (Maj)",
"Captain (Capt)",
"Lieutenant (Lt)",
"Second Lieutenant (2Lt)",
"Officer Cadet (OCdt)",
"Chief Warrant Officer(CWO)",
"Master Warrant Officer (MWO)",
"Warrant Officer (WO)",
"Sergeant (Sgt)",
"Master Corporal (MCpl)",
"Corporal (Cpl)",
"Private (Trained) (Pte (T)) / Aviator (Trained) (Avr (T))",
"Private (Basic) (Pte (B)) / Aviator (Basic) (Avr (B))"
];

var fnames=[
"Olivia",
"Emma",
"Charlotte",
"Sophia",
"Aria",
"Ava",
"Chloe",
"Zoey",
"Abigail",
"Amelia",
"Emily",
"Isabella",
"Mila",
"Maya",
"Lily",
"Riley",
"Madison",
"Mia",
"Nora",
"Ella",
"Noah",
"Liam",
"Jackson",
"Lucas",
"Logan",
"Benjamin",
"Jacob",
"William",
"Oliver",
"James",
"Lincoln",
"Jack",
"Ethan",
"Carter",
"Aiden",
"Grayson",
"Mason",
"Owen",
"Leo",
"Nathan"
]


var lnames=[
"Smith",
"Brown",
"Tremblay",
"Martin",
"Roy",
"Wilson",
"Macdonald",
"Gagnon",
"Johnson",
"Taylor",
"Cote",
"Campbell",
"Anderson",
"Leblanc",
"Lee",
"Jones",
"White",
"Williams",
"Miller",
"Thompson",
"Gauthier",
"Young",
"Van",
"Morin",
"Bouchard",
"Scott",
"Stewart",
"Belanger",
"Reid",
"Pelletier",
"Moore",
"Lavoie",
"King",
"Robinson",
"Levesque",
"Murphy",
"Fortin",
"Gagne",
"Wong",
"Clark",
"Johnston",
"Clarke",
"Ross",
"Walker",
"Thomas",
"Boucher",
"Landry",
"Kelly",
"Bergeron",
"Davis",
"Mitchell",
"Murray",
"Poirier",
"Mcdonald",
"Richard",
"Wright",
"Girard",
"Lewis",
"Baker",
"Roberts",
"Simard",
"Graham",
"Caron",
"Harris",
"Jackson",
"Green",
"Beaulieu",
"Fraser",
"Fournier",
"Kennedy",
"Hall",
"Hill",
"Chan",
"Wood",
"Lapointe"
]
/**
 * Randomizig method to compile a sample JSON object
 * @return {[type]} [description]
 */
function make_sample(){
	var push_to_command= function(i, p , pos){
		switch(pos.length){
			case 1:
				SAMPLE.units[i].officers[pos[0]].command.push(p);
			break;
			case 2:
				SAMPLE.units[i].officers[pos[0]].command[pos[1]].command.push(p);
			break;
			case 3:
				SAMPLE.units[i].officers[pos[0]].command[pos[1]].command[pos[2]].command.push(p);
			break;
			case 4:
				SAMPLE.units[i].officers[pos[0]].command[pos[1]].command[pos[2]].command[pos[3]].command.push(p);
			break;
			case 5:
				SAMPLE.units[i].officers[pos[0]].command[pos[1]].command[pos[2]].command[pos[3]].command[pos[4]].command.push(p);
			break;
			case 6:
				SAMPLE.units[i].officers[pos[0]].command[pos[1]].command[pos[2]].command[pos[3]].command[pos[4]].command[pos[5]].command.push(p);
			break;
			default:
				SAMPLE.units[i].officers[pos[0]].command[pos[1]].command[pos[2]].command[pos[3]].command[pos[4]].command[pos[5]].command[pos[6]].command.push(p);
			break;
		}
	} 
	var  locate_commander= function(arr, rank, pos){
		var bool = false;
			for( var i = 0; i < arr.length;i++ ){
				bool = ( arr[i].division=="Navy")?true:false;
				if( locate_rank_pos(rank, bool) > locate_rank_pos(arr[i].rank, bool)){
					pos.push(i)
					if( arr[i].command.length > 0 ){
						pos = locate_commander(arr[i].command, rank, pos)
					}
					i =  arr.length;
				} 
			}
		return pos;
	}
	var  locate_rank_pos= function(rank, navy){
		if( navy){
			for(var i =0; i < navy_ranks.length; i++){
				if( navy_ranks[i] == rank){
					return i;
				}
			}
		}else{
			for(var i =0; i < ranks.length; i++){
				if( ranks[i] == rank){
					return i;
				}
			}
		}
	}
	var  make_person = function(div){	
		var temp = new officer();
		temp.name = fnames[(Math.floor( Math.random()* fnames.length) )]+" "+lnames[(Math.floor( Math.random()* lnames.length) )];
		if( div== "Navy"){
			temp.rank = navy_ranks[(Math.floor( Math.random()* navy_ranks.length ))];
		}else{
			temp.rank = ranks[(Math.floor( Math.random()* ranks.length) )];
		}
		temp.division =div;
		temp.command=[];
		return temp;
	}
	for ( var i = 0; i < divisions.length; i++){
		var d = new department();
		d.name = divisions[i];
		d.budget = Math.floor( Math.random()* 100000000)
		d.address = addr[i] ;
		d.officers = [];
		SAMPLE.units.push( d)
		for( var j = 0 ; j < Math.floor(Math.random()*30000); j++){
			var p = new make_person(d.name);
			var pos = locate_commander(d.officers, p.rank, []);
			if( pos.length == 0 ){
				d.officers.push( p);
			}else{
				push_to_command(i, p , pos);
			}
		}
	}
}
