const printCode=document.getElementById("idKey");
const clean = document.getElementById("idClean");

const loadKey = ()=>{
	const word = (document.getElementById("idWord").value).toUpperCase();
	if (word.length===0 ){
		alert("Ingrese su texto");
	}else{
		const fcifrar=cipherNumber.encodekey(word);
		const numberCard = new String(fcifrar)
		document.getElementById("idPrint").innerHTML= numberCard.replace(/,/g, "");
	}	
}
const loadClean = () =>{
	document.getElementById("idWord").value="";
}
printCode.addEventListener('click',loadKey);
clean.addEventListener('click',loadClean);

