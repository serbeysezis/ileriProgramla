// Ýlk altý asal sayýyý listelersek: 2, 3, 5, 7, 11 ve 13
// 6. Asal sayýyý 13 olarak görüyoruz
// 10.001. Asal sayý nedir?

(function euler007() {
  var primes = [2];
  var i = 3;
  var j = 2;
  var maxPrimes = 10001;

// asal sayýlar aranan sayýdan daha az
  while (primes.length < maxPrimes) {
    
// j'ye bölündüðümde bir kalan var,
// hala asal olabileceðini gösterir
    while (i % j !== 0) {	
      j++;
      // eðer noktaya ulaþýrsak j === i,
      // o zaman asal olmalý
      if ( j === i ) {
        primes.push(i);
        break;
      }
    }

    // aksi takdirde, i'yi artýrýn ve j'yi sýfýrlayýn;
    
    i++;
    j = 2;
  }

  console.log(primes[maxPrimes - 1]);
  return primes[maxPrimes - 1];
}());
