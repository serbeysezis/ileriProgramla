// Ýngilizce kullanýmý olacak þekilde

function Prob17(){

	//Ýngilizce yazýmý
	var firstTwenty = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
	var tens = ["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","onehundred"];
		
	// Bu yalnýzca on bine kadar olan sayýlar için çalýþýr
	// Döndürülen dizede boþluk veya kýsa çizgi yok
	
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
		
		//Özetle;
		
		var sum = 0;
		for(var i = 1; i <= 1000; i++){
			sum += this.num2English(i).length;
			
			//console.log(i,this.num2English(i));
		}
		return sum;
	};
}
