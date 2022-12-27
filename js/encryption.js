let words = ["ai", "enter", "imes", "ober", "ufat"];
let vowels = ["a", "e", "i", "o", "u"];

//Encripta la cadena ingresada y la retorna
let encrypt = (word) => {
  let encryptedWord = "";

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word.charAt(i))) {
      encryptedWord += words[vowels.indexOf(word.charAt(i))];
    } else {
      encryptedWord += word.charAt(i);
    }
  }

  return encryptedWord;
};

//Desencripta la cadena ingresada y la retorna
let decrypt = (word) => {
  let decryptedWord = "";

  for (let i = 0; i < words.length; i++) {
    word = word.replaceAll(words[i], vowels[i]);
    decryptedWord = word;
  }

  return decryptedWord;
};