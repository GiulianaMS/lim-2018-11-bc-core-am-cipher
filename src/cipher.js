window.cipher = {
	encode:function(offset, string){
		let result = "";
		let equation;
		for (let i = 0 ; i <= string.length-1; i++){
			string = string.toUpperCase();
			if(string.charCodeAt(i) === 32){
				equation = " ";
			}else{
				equation = String.fromCharCode((string.charCodeAt(i)-65+offset)%26+65);
			}
			result = result + equation;
		}
			return result;
	},
	decode:function(offset, string){
		let result = "";
		let equation;
		for (let i = 0 ; i <= string.length-1; i++){
			string = string.toUpperCase();
			if(string.charCodeAt(i) === 32){
				equation = " ";
			}else {
				equation = String.fromCharCode((string.charCodeAt(i)-65-offset)%26+65);
				if(equation.charCodeAt(0) < 65){
					equation = String.fromCharCode(equation.charCodeAt(0)+26);
				}
			}
			result = result + equation;
		}
			return result;
	}
};
