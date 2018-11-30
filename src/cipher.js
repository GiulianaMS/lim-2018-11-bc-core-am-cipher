window.cipher = {
	encode:function(offset, string){
		let result = "";
		let equation;
		let parameter;
		for (let i = 0 ; i <= string.length-1; i++){
			if(string.charCodeAt(i) === 32){
				equation = " ";
			}else{
				if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
					parameter = parseInt(97);
				}else {
					parameter = parseInt(65);
				}
				equation = String.fromCharCode((string.charCodeAt(i)-parameter+offset)%26+parameter);
			}
			result = result + equation;
		}
		return result;
	},
	decode:function(offset, string){
		let result = "";
		let equation;
		let parameter;
		for (let i = 0 ; i <= string.length-1; i++){
			if(string.charCodeAt(i) === 32){
				equation = " ";
			}else{
				if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
					parameter = parseInt(97);
				}else{
					parameter = parseInt(65);
				}
				equation = String.fromCharCode((string.charCodeAt(i)-parameter-offset)%26+parameter);
				if(equation.charCodeAt(0) < parameter){
					equation = String.fromCharCode(equation.charCodeAt(0)+26);
				}
			}
			result = result + equation;
		}
		return result;
	}
};
