// �ngilizce kullan�m� olacak �ekilde

function Prob17(){

	//�ngilizce yaz�m�
	var firstTwenty = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
	var tens = ["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","onehundred"];
		
	// Bu yaln�zca on bine kadar olan say�lar i�in �al���r
	// D�nd�r�len dizede bo�luk veya k�sa �izgi yok
	
	this.num2English = function(number){
		var str = "";
		if(number <= 20){
			str = firstTwenty[number];
		}else if(number <= 100 && number%10 == 0){
			str = tens[number/10];
		}else if(number < 100){
			str = tens[number/10|0] + this.num2English(number%10);
		}else if(number < 1000 & number%100 == 0){
			str = firstTwenty[number/100|0] + "hundred";
		}else if(number < 1000){
			str = firstTwenty[number/100|0] + "hundredand" + this.num2English(number%100);
		}else if(number == 1000){
			str = "onethousand";
		}
		return str;
	};

	this.eval = function(){
		
		//�zetle;
		
		var sum = 0;
		for(var i = 1; i <= 1000; i++){
			sum += this.num2English(i).length;
			
			//console.log(i,this.num2English(i));
		}
		return sum;
	};
}
