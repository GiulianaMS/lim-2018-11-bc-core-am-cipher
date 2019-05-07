window.cipherNumber = {
	encodekey:function(word){
    let result=[];
    const arrayOfWord = word.split('');
		let equation;
		for (let i = 0; i < arrayOfWord.length; i++) {
        let l = arrayOfWord[i];
				switch(l){
          case "A":
          case "B":
          case "C":
          equation = 1;
          break;
					case "D":
					case "E":
					case "F":
          equation = 2;
          break;
					case "G":
					case "H":
					case "I":
					equation = 3;
					break;
					case "J":
					case "K":
					case "L":
					equation = 4;
					break;
					case "M":
					case "N": 
					case "O":
					equation = 5;
					break;
					case "P":
					case "Q":
					case "R":
					equation = 6;
					break;
					case "S":
					case "T":
					equation = 7;
					break;
					case "U":
					case "V": 
          equation = 8;
          break;
          case "W":
          case "X":
          equation = 9;
          break;
					case "Y":
					case "Z":
					equation = 0;
					break;	
				}
				result.push(equation);
      }
    return result;
	}
};