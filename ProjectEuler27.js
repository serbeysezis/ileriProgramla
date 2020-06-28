var isPrime = []

const sieve = (n) => {
let sieve = []
let primes = []
let upperLimit = Math.sqrt(n)

// 2�den (n-1)�e kadar taray�n
for (var i = 0; i <= n; i++) {
sieve.push(true);
}

// Asallar� tan�mlamak
for (let i = 2; i <= upperLimit; ++i) {
if (sieve[i]) {
// Asallar kald�r�lmad�
// Tararken [i]�yi do�ru olarak b�rak

// Bu asallar�n katlar�n� taramadan ��kar�n
for (var j = i + i; j <= n; j = j + i) {
sieve[j] = false;
}
}
}
return sieve
}

const f = (limit) => {
isPrime = sieve(1000) 
let maxPrimes = 0
let product = 1
 //a�ya tan�mlanan �limit. ve a, limitten k���kse a�y� 1 artt�r.
for(let a=-limit; a<=limit; a++){
//b�ye tan�mlanan �limit. ve b, limitten k���kse b�yi 1 artt�r.
for(let b=-limit; b<=limit; b++){
let n = 0
while( isPrime[ Math.abs( (n * n) + (a*n) + (b) ) ] ){
n++
}
if(n > maxPrimes){
product = a * b
// maximum asal say�
maxPrimes = n
}
}
}
return product
}
module.exports = f
