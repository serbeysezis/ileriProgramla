<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <body>
    <script type="text/javascript">
        <!--

        Zaman=new Date();

        RastGeleSayi=Math.random();
        Sayi=parseInt(RastGeleSayi*100);

        k=0;
        BaslangicDakikasi=Zaman.getMinutes();

        do{
            GecenDakika=(1+Zaman.getMinutes()-BaslangicDakikasi);

            Cevap=prompt((++k)+" Tahmininiz i�in Say� Giriniz, Ge�en Dakika " + GecenDakika);

            if(Cevap!=Sayi){
                alert((Cevap<Sayi?"B�y�k":"K���k")+" Giriniz");
            }

        }while(Cevap!=Sayi);

        alert("Bravo Bildiniz Tutulan Say� " + Sayi + " Harcad���n�z Dakika " + GecenDakika);
       
        //-->
    </script>
  </body>
</html>
