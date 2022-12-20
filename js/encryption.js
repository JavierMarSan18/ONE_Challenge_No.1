let btnEnc = document.getElementById("btn-enc");
let btnDes = document.getElementById("btn-des");
let btnCopy = document.getElementById("btn-copy");
let words = ["ai", "enter", "imes", "ober", "ufat"];
let vowels = ["a", "e", "i", "o", "u"];

//Encripta la cadena ingresada y la retorna
let encrypt = (word) => {
  let encryptedWord = "";

  if (!isLowerCase(word)) {
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word.charAt(i))) {
        encryptedWord += words[vowels.indexOf(word.charAt(i))];
      } else {
        encryptedWord += word.charAt(i);
      }
    }
  }

  return encryptedWord;
};

//Desencripta la cadena ingresada y la retorna
let decrypt = (word) => {
  let decryptedWord = "";

  if (!isLowerCase(word)) {
    for (let i = 0; i < words.length; i++) {
      word = word.replaceAll(words[i], vowels[i]);
      decryptedWord = word;
    }
  }

  return decryptedWord;
};

//Verifica si la cadena ingresada contiene mayusculas
let isLowerCase = (word) => {
  return word.toLowerCase() != word;
};

//Devuelve el valor que contiene el input para ingresar el texto
let getWordFromInputText = () => {
  let inputText = document.getElementById("input-text");
  return inputText.value;
};

//Devuelve el valor que contiene el input donde el texto es mostrado
let getWordFromOutputText = () => {
    let ouputText = document.getElementById("output-text");
    return ouputText.value;
  };

//Carga la cadena al input de salida de texto
let loadWordToOutputText = (word) => {
  let outputText = document.getElementById("output-text");
  outputText.value = word;
};

//Carga la cadena encriptada al input de salida de texto
let loadEncryptedWord = () => {
  let word = getWordFromInputText();
  loadWordToOutputText(encrypt(word));
};

//Carga la cadena desencriptada al input de salida de texto
let loadDecryptedWord = () => {
  let word = getWordFromInputText();
  loadWordToOutputText(decrypt(word));
};

//Copia la cadena del input de salida hacia el clipboard.
let copyToClipboard = () => {
  navigator.clipboard.writeText(getWordFromOutputText());
};

btnEnc.onclick = loadEncryptedWord;
btnDes.onclick = loadDecryptedWord;
btnCopy.onclick = copyToClipboard;
