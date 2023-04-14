// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(str) {
  let decodedStr = "";
  
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 77) {
      decodedStr += String.fromCharCode(charCode + 13);
    } else if (charCode >= 78 && charCode <= 90) {
      decodedStr += String.fromCharCode(charCode - 13);
    } else {
      decodedStr += str.charAt(i);
    }
  }
  
  return decodedStr;
}


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
let encodedStr = "EBG13 rknzcyr.";
let decodedStr = rot13(encodedStr);

console.log(decodedStr); // Output: ROT13 example.

