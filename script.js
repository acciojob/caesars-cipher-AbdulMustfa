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
  // Create an empty string to store the decoded message
  let decoded = "";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    const charCode = str.charCodeAt(i);

    // Check if the current character is a letter
    if (/[A-Z]/.test(str[i])) {
      // If the character is a letter, shift it 13 places
      // (taking into account the wrap-around at the end of the alphabet)
      const shiftedCode = ((charCode - 65 + 13) % 26) + 65;

      // Convert the shifted code back to a character and add it to the decoded message
      decoded += String.fromCharCode(shiftedCode);
    } else {
      // If the character is not a letter, simply add it to the decoded message
      decoded += str[i];
    }
  }

  // Return the decoded message
  return decoded;
}

// Example usage
console.log(rot13("EBG13 rknzcyr."));    // "ROT13 example."
console.log(rot13("Gur dhvpx oebja sbk whzcf bire n ynml qbt."));   // "The quick brown fox jumps over a lazy dog."


