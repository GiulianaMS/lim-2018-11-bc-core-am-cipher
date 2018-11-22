function loadCode(){
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

}