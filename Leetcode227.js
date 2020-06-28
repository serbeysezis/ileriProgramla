var calculate = function(s) {
  //tan�mlanan uzunlu�u 0�a d�nd�r.
      if(!s  !s.length) return 0;
      s = s.trim();
      let stack = [];
  //numaras�n�n 0 olmas�na izin ver ve i�areti pozitif olsun.
      let num = 0, sign = '+';
  // i = 0�d�r. Ve i, s� nin uzunlu�undan k���kse i�yi 1 artt�r.
      for(let i = 0; i < s.length; i++) {
          if(s[i] === ' ') continue;
          if(!isNaN(s[i])) num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
          if(isNaN(s[i])  i === s.length - 1) {
              switch(sign) {
                 // durumu + ve ekleyip bitir.
                  case '+':
                      stack.push(num);
                      break;
                  // durumu - ve ekleyip bitir.
                  case '-':
                      stack.push(-num);
                      break;

                  case '*':
                      stack.push(stack.pop() * num);
                      break;

                  case '/':
                      stack.push(parseInt(stack.pop() / num, 10));
                      break;
              }
              sign = s[i];
              num = 0;
          }
      }
      return stack.reduce((a, b) => a + b);
  };
