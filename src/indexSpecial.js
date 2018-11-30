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
		const fcifrar=cipherSpecial.encodeSpecial(offset,string);
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
		const fcifrar=cipherSpecial.decodeSpecial(offset,string);
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