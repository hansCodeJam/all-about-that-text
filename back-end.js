const biggify = function(num) {
    return num + 9000;
  }
  
  const nasafy = function(num) {
      let array = [];
  
      while(num >=1) {
        array.push(num);
        num--;
      }
  
      array.push('Blast off!');
  
      return array;
  }
  const reversify = function(str) {
    return str.split('').reverse().join('');
  }
  
  const titleify = function(str) {
    let caseWords = [];
    let splitStr = str.split(' ')
    
    for (const word of splitStr) {
      caseWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  
    return caseWords.join(' ');
  }
  
  
  const crazify = function(str) {
    let crazy1 = '';
    let crazy2 = 0;
  
    for (const char of str) {
      if(char === ' ') {
      crazy1 = crazy1 + ' ';
    } else {
      crazy1 = crazy1 + (crazy2 % 2 === 1 ? char.toUpperCase() : char.toLowerCase());
      crazy2++;
    }
  }
  return crazy1;
  
  }
  
  
  
  
  
 