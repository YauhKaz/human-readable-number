module.exports = function toReadable (number) {    
    if (number == 0) return 'zero';
    let buf=number;
    buf = String(buf);
    let index = buf.length;
    if (index == 1){
    let num = number;
    return firstNumber(num);  
    }
    if (index == 2){
      if (number%10 == 0){
        return secondNumber(Math.trunc(number/10));
      }
      else if (number>20 && number%10 != 0){
        return secondNumber(Math.trunc(number/10))+' '+firstNumber(number%10);
      }
      else{
        return tenNineteenNumber(number);
      }
    }
    if (index == 3)
    if (Math.trunc(number%10)==0 && Math.trunc((number%100)/10)==0) return firstNumber(Math.trunc(number/100))+' '+'hundred';
    else if (Math.trunc((number%100)/10)==1){
      return firstNumber(Math.trunc(number/100))+' '+'hundred'+' '+tenNineteenNumber(number%100);
    }
    else if (Math.trunc((number%100)/10)==0){
    return firstNumber(Math.trunc(number/100))+' '+'hundred'+' '+firstNumber(number%10);
    }
    else if (number%10==0){
      return firstNumber(Math.trunc(number/100))+' '+'hundred'+' '+secondNumber(Math.trunc((number%100)/10));
    }
    else{
    return firstNumber(Math.trunc(number/100))+' '+'hundred'+' '+secondNumber(Math.trunc((number%100)/10))+' '+firstNumber(number%10);
  }   
  }
  
  
  function firstNumber(num){
      switch(num){
          case 0: return '';
          case 1: return 'one';
          case 2: return 'two';
          case 3: return 'three';
          case 4: return 'four';
          case 5: return 'five';
          case 6: return 'six';
          case 7: return 'seven';
          case 8: return 'eight';
          case 9: return 'nine';
      }
  }
  
  function secondNumber(num){
      switch(num){
          case 1: return 'ten';
          case 2: return 'twenty';
          case 3: return 'thirty';
          case 4: return 'forty';
          case 5: return 'fifty';
          case 6: return 'sixty';
          case 7: return 'seventy';
          case 8: return 'eighty';
          case 9: return 'ninety';
      }
  }
  
  function tenNineteenNumber(num){
  switch(num){
          case 10: return 'ten';
          case 11: return 'eleven';
          case 12: return 'twelve';
          case 13: return 'thirteen';
          case 14: return 'fourteen';
          case 15: return 'fifteen';
          case 16: return 'sixteen';
          case 17: return 'seventeen';
          case 18: return 'eighteen';
          case 19: return 'nineteen';
        }
  }
  
  