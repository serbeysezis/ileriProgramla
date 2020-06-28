function isPrime(number){
		if(number <= 1){return false;}
		if(number == 2){return true;}
		if(!(number%2)){return false;}
		var maxCheck = Math.floor(Math.sqrt(number));
		for(var i = 3; i <= maxCheck; i+=2){
			if(!(number%i)){return false;}
		}
		return true;
	}
	

	function isTruncatableL2R(number){
		if(!isPrime(number)){return false;}
		var numStr = String(number);
		if(numStr.length == 1){return true;}
		var l2r = parseInt(numStr.substr(1));
	

		return isTruncatableL2R(l2r);
	}
	

	function isTruncatableR2L(number){
		if(!isPrime(number)){return false;}
		var numStr = String(number);
		if(numStr.length == 1){return true;}
		var r2l = parseInt(numStr.substr(0,numStr.length-1));
	

		return isTruncatableR2L(r2l);
	}
	

	function isTruncatable(number){
		return isTruncatableR2L(number)&&isTruncatableL2R(number);
	}
	

	
	
	// �st s�n�r�n ne oldu�u hakk�nda hi�bir fikrim yok, ama sadece on bir tane oldu�unu bildi�im i�in,
// O kadar �ok buldu�umda durabilirim.
var numFound = 0;
	var sum = 0;
	var i = 11;
	while(numFound < 11){
		if(isTruncatable(i)){
			numFound++;
			console.log(i);
			sum+=i;
		}
	

		i++;
	}
	

	console.log(sum);
	//console.log(isTruncatable(3797))
