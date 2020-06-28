var reverse = function(x) {
let reverse = 0;
let max = 2 ** 31 -1;
let min = -1 * 2 ** 31;
let negative = false;

if (x < 0)
    {
        negative = true;
        x = Math.abs(x);
    }

while (x != 0)
    {
        reverse = reverse*10 + x%10 
        x = Math.floor(x/10);
     }

if (reverse > max || reverse < min) return 0;

return (negative) ? reverse *= -1 : reverse;
    };




// ters sürümü takip etmek için yeni bir değişken oluşturun
geri çevirelim = 0;

// her iki yönde 32 bit imzalı intiger sınırı için sınırlar ayarlamanız gerekiyor - ve +
max = 2 ** 31 -1 olsun;
min = -1 * 2 ** 31 olsun;

// negatif bir tamsayıyı takip etmek için başka bir değişken
negatif = yanlış;

// tamsayı negatifse, negatif değişkeni true değerine ayarlar ve mutlak değeri alırız
x. Burada kontrol etmeniz gerekiyor, çünkü x Math.abs olarak ayarlandığında, orijinal x değerini kaybedeceğiz.
eğer (x <0)
{
negatif = doğru;
x = Math.abs (x);
}

// tamsayı 0'a eşit olmasa da, tamsayıların son basamağını X% 10 almanız gerekir,
ve tersine ayarlayın. İlk döngüde, reverse10 0'a eşittir, böylece ters
0 + son rakam. Sonra x'i 10'a bölmeliyiz, böylece bir sonraki döngü
tamsayının sonraki basamağı olsun. X'i yerine koymalıyız, böylece bir tam sayı elde ederiz
(x! = 0)
{
ters = ters10 + x% 10
x = Matematik zemin (x / 10);
}

// üst ve alt sınırlarla kontrol edilmesi gerekiyor
(ters> maks || ters <dk) 0 döndürürse;

// x başlangıçta negatif sayı ise, negatif değişkeni true olarak ayarlayacağız.
Bu durumda, tersini -1 ile çarparak negatif bir tam sayıya çeviririz. Negatif değilse,
sadece geri dönün.
