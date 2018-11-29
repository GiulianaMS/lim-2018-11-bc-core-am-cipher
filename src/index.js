const printCode=document.getElementById("idCode");
const printDecipher=document.getElementById("idDecipher");
const clean = document.getElementById("idClean");
const only = document.getElementById("idOffset")

const onlyNumber =()=>{
	if (event.keyCode < 45 || event.keyCode > 57){
		event.returnValue = false;
	}	
}
const loadCode = ()=>{
	const offset = parseInt(document.getElementById("idOffset").value);
	const string = document.getElementById("idString").value;
	if(isNaN(offset) && string.length===0){
		alert("Ingrese su codigo y frase");
	}else if (string.length===0 ){
		alert("Ingrese su texto");
	}else if(isNaN(offset)){
		alert("Ingrese su codigo");
	}else{
		const fcifrar=cipher.encode(offset,string);
		document.getElementById("idPrint").innerHTML= fcifrar;
	}	
	
}
const loadDecipher = () =>{
	const string = document.getElementById("idString").value;
	const offset = parseInt(document.getElementById("idOffset").value);
	if(isNaN(offset) && string.length===0){
		alert("Ingrese su codigo y frase");
	}else if (string.length===0 ){
		alert("Ingrese su texto");
	}else if(isNaN(offset)){
		alert("Ingrese su codigo");
	}else{
		const fcifrar=cipher.decode(offset,string);
		document.getElementById("idPrint").innerHTML= fcifrar;
	}	
}
const loadClean = () =>{
	document.getElementById("idOffset").value="";
	document.getElementById("idString").value="";
	document.getElementById("idPrint").value="";
}
printCode.addEventListener('click',loadCode);
printDecipher.addEventListener('click',loadDecipher);
clean.addEventListener('click',loadClean);
only.addEventListener('keypress',onlyNumber);

/*function loadCode(){
	const sentence = document.getElementById("idSentence").value;
	const key = parseInt(document.getElementById("idKey").value);
	let result = "";

	for (let i = 0 ; i <= sentence.length-1; i++){
		let equation = String.fromCharCode((sentence.charCodeAt(i)-65+key)%26+65);
		result = result+equation;
	}
	document.getElementById("printCode").innerHTML= result;
}
function loadDecipher(){
	const sentence = document.getElementById("idSentence").value;
	const key = parseInt(document.getElementById("idKey").value);
	let result = "";
	for (let i = 0 ; i <= sentence.length-1; i++){
		let equation = String.fromCharCode((sentence.charCodeAt(i)-65-key)%26+65);
		if(equation===':'){
			equation=' '
		}else if(equation.charCodeAt(0)<65){
			equation=String.fromCharCode(equation.charCodeAt(0)+26);
		}else{}
		result = result+equation;
	}
	document.getElementById("printDecipher").innerHTML= result;
}*/