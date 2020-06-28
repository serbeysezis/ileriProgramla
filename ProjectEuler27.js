var isPrime = []

const sieve = (n) => {
let sieve = []
let primes = []
let upperLimit = Math.sqrt(n)

// 2’den (n-1)’e kadar tarayýn
for (var i = 0; i <= n; i++) {
sieve.push(true);
}

// Asallarý tanýmlamak
for (let i = 2; i <= upperLimit; ++i) {
if (sieve[i]) {
// Asallar kaldýrýlmadý
// Tararken [i]’yi doðru olarak býrak

// Bu asallarýn katlarýný taramadan çýkarýn
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
 //a’ya tanýmlanan –limit. ve a, limitten küçükse a’yý 1 arttýr.
for(let a=-limit; a<=limit; a++){
//b’ye tanýmlanan –limit. ve b, limitten küçükse b’yi 1 arttýr.
for(let b=-limit; b<=limit; b++){
let n = 0
while( isPrime[ Math.abs( (n * n) + (a*n) + (b) ) ] ){
n++
}
if(n > maxPrimes){
product = a * b
// maximum asal sayý
maxPrimes = n
}
}
}
return product
}
module.exports = f
