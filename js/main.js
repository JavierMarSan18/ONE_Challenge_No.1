let btnEncrypt = document.getElementById('btn-encrypt');
let btnDecrypt = document.getElementById('btn-decrypt')
let btnCopy = document.getElementById('btn-copy');

//Cambia el display de los contenedores de salida
let toggleOutputContainer = () => {
    let messageContainer = document.getElementById('message-container');
    messageContainer.style.display = 'none'

    let outputTextContainer = document.getElementById('output-text-container');
    outputTextContainer.style.display = 'flex';
}

//Verifica si la cadena ingresada contiene mayusculas
let isLowerCase = (word) => {
    return word.toLowerCase() == word;
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

//Copia la cadena del input de salida hacia el clipboard.
let copyToClipboard = () => {
    navigator.clipboard.writeText(getWordFromOutputText());
  };

  //Carga la cadena al input de salida de texto
let loadWordToOutputText = (word) => {
    let outputText = document.getElementById("output-text");
    outputText.value = word;
};


let processWord = (action) => {
    let word = getWordFromInputText();

    if(word != ""  && isLowerCase(word)){
        toggleOutputContainer();
        let proccessedWord = action(word);
        loadWordToOutputText(proccessedWord);
    }
}


//Se agregan eventos a los botones
//Encripta la cadena y la carga al contenedor de salida
btnEncrypt.addEventListener('click', () => {
    processWord(encrypt);
});

//Desencripta la cadena y la carga al contenedor de salida
btnDecrypt.addEventListener('click', () => {
    processWord(decrypt);
})

//Copia la cadena al clipboard
btnCopy.onclick = copyToClipboard;