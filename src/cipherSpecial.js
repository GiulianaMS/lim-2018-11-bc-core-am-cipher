window.cipherSpecial = {
	encodeSpecial:function(offset, string){
		let result = "";
		let equation;
		for (let i = 0 ; i <= string.length-1; i++){
			equation = String.fromCharCode((string.charCodeAt(i)-32+offset)%20000+32);
			result = result + equation;
		}
		return result;
	},
	decodeSpecial:function(offset, string){
		let result = "";
		let equation;
		for (let i = 0 ; i <= string.length-1; i++){
			equation = String.fromCharCode((string.charCodeAt(i)-32-offset)%20000+32);
				if(equation.charCodeAt(0) < 32){
					equation = String.fromCharCode(equation.charCodeAt(0)+20000);
				}
			result = result + equation;
		}
		return result;
	}
};
