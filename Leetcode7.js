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




// ters s�r�m� takip etmek i�in yeni bir de�i�ken olu�turun
geri �evirelim = 0;

// her iki y�nde 32 bit imzal� intiger s�n�r� i�in s�n�rlar ayarlaman�z gerekiyor - ve +
max = 2 ** 31 -1 olsun;
min = -1 * 2 ** 31 olsun;

// negatif bir tamsay�y� takip etmek i�in ba�ka bir de�i�ken
negatif = yanl��;

// tamsay� negatifse, negatif de�i�keni true de�erine ayarlar ve mutlak de�eri al�r�z
x. Burada kontrol etmeniz gerekiyor, ��nk� x Math.abs olarak ayarland���nda, orijinal x de�erini kaybedece�iz.
e�er (x <0)
{
negatif = do�ru;
x = Math.abs (x);
}

// tamsay� 0'a e�it olmasa da, tamsay�lar�n son basama��n� X% 10 alman�z gerekir,
ve tersine ayarlay�n. �lk d�ng�de, reverse10 0'a e�ittir, b�ylece ters
0 + son rakam. Sonra x'i 10'a b�lmeliyiz, b�ylece bir sonraki d�ng�
tamsay�n�n sonraki basama�� olsun. X'i yerine koymal�y�z, b�ylece bir tam say� elde ederiz
(x! = 0)
{
ters = ters10 + x% 10
x = Matematik zemin (x / 10);
}

// �st ve alt s�n�rlarla kontrol edilmesi gerekiyor
(ters> maks || ters <dk) 0 d�nd�r�rse;

// x ba�lang��ta negatif say� ise, negatif de�i�keni true olarak ayarlayaca��z.
Bu durumda, tersini -1 ile �arparak negatif bir tam say�ya �eviririz. Negatif de�ilse,
sadece geri d�n�n.
