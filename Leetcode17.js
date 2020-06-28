// rakamdan (pmap dizinine dayalý olarak) harf seçenekleri dizisine dönüþtürme
const pmap = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].map(v => v.split(''))

// i bulunduðumuz basamaklardaki konumu izler, varsayýlan olarak 0'dan baþlar
const letterCombinations = (digits, i = 0) => {
  // boþ dizeleri yakalayýn ve son dizinde sonlandýrýn
  
if (i >= digits.length - 1) return pmap[digits[i] - 2] || []
  // yeni basamak seçenekleri ile yineleme, dizi [] 'den herhangi bir boyuta yeniden boyutlandýrabilirsiniz  

return pmap[digits[i] - 2].reduce((outputArray, thisLetter) => {
    letterCombinations(digits, i + 1) // get all next digits options
	// hepsine bu mektubu ekle
      // birleþtirilmiþ sonucu yeni dizi giriþi olarak aktar
      
.forEach(laterLetters => outputArray.push(thisLetter + laterLetters))  
    return outputArray // move onto next reduce loop (next "thisLetter")
  }, []) 
// varsayýlan ve baþlangýç outputArray deðeri
}
