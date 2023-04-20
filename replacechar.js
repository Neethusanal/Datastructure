function replaceAlphabet(str, n) {
    // create an array of alphabets
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // convert the string to an array of characters
    const chars = str.split('');
  
    // loop through the characters and replace alphabets
    const replacedChars = chars.map((char) => {
      const lowerChar = char.toLowerCase();
      const index = alphabets.indexOf(lowerChar);
      if (index === -1) {
        // non-alphabetic character, ignore
        return char;
      } else {
        const newIndex = (index + n) % alphabets.length;
        const newChar = alphabets[newIndex];
        // maintain the original case
        return char === lowerChar ? newChar : newChar.toUpperCase();
      }
    });
  
    // join the replaced characters back into a string
    const replacedStr = replacedChars.join('');
  
    return replacedStr;
  }
  const str = 'Hello, World!';
const n = 2;
const replacedStr = replaceAlphabet(str, n);
console.log(replacedStr); // 'Jgnnq, Yqtnf!'
