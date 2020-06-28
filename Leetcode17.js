// rakamdan (pmap dizinine dayal� olarak) harf se�enekleri dizisine d�n��t�rme
const pmap = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].map(v => v.split(''))

// i bulundu�umuz basamaklardaki konumu izler, varsay�lan olarak 0'dan ba�lar
const letterCombinations = (digits, i = 0) => {
  // bo� dizeleri yakalay�n ve son dizinde sonland�r�n
  
if (i >= digits.length - 1) return pmap[digits[i] - 2] || []
  // yeni basamak se�enekleri ile yineleme, dizi [] 'den herhangi bir boyuta yeniden boyutland�rabilirsiniz  

return pmap[digits[i] - 2].reduce((outputArray, thisLetter) => {
    letterCombinations(digits, i + 1) // get all next digits options
	// hepsine bu mektubu ekle
      // birle�tirilmi� sonucu yeni dizi giri�i olarak aktar
      
.forEach(laterLetters => outputArray.push(thisLetter + laterLetters))  
    return outputArray // move onto next reduce loop (next "thisLetter")
  }, []) 
// varsay�lan ve ba�lang�� outputArray de�eri
}
