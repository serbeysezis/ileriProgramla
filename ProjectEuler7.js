// �lk alt� asal say�y� listelersek: 2, 3, 5, 7, 11 ve 13
// 6. Asal say�y� 13 olarak g�r�yoruz
// 10.001. Asal say� nedir?

(function euler007() {
  var primes = [2];
  var i = 3;
  var j = 2;
  var maxPrimes = 10001;

// asal say�lar aranan say�dan daha az
  while (primes.length < maxPrimes) {
    
// j'ye b�l�nd���mde bir kalan var,
// hala asal olabilece�ini g�sterir
    while (i % j !== 0) {	
      j++;
      // e�er noktaya ula��rsak j === i,
      // o zaman asal olmal�
      if ( j === i ) {
        primes.push(i);
        break;
      }
    }

    // aksi takdirde, i'yi art�r�n ve j'yi s�f�rlay�n;
    
    i++;
    j = 2;
  }

  console.log(primes[maxPrimes - 1]);
  return primes[maxPrimes - 1];
}());
