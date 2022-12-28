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

//Valida que la cadena solo contenga letras minúsculas y espacios.
let validateString = (str) => {
    return !str.match(/[^a-zñ ]/);
}

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
let loadWordToOutputText = (str) => {
  let outputText = document.getElementById("output-text");
  outputText.value = str;
};

//Copia la cadena del input de salida hacia el clipboard.
let copyToClipboard = () => {
    navigator.clipboard.writeText(getWordFromOutputText());
  };

//Aplica las validaciones en la cadena para poder ser encriptada o desencriptada
let processWord = (action) => {
    let str = getWordFromInputText();

    if(str == ""){
        return;
    }

    if(validateString(str)){
        toggleOutputContainer();
        let processedStr = action(str);
        loadWordToOutputText(processedStr);
    }else{
        animateWarningContainer();
    }
}

let animateWarningContainer = () => {
    let warningContainer = document.getElementById('warning-container');
    warningContainer.style = `
        transition-duration: 0.3s;
        padding-left: 2%;
    `;

    setTimeout(() => {
        warningContainer.style = `
        transition-duration: 0.3s;
    `;
    }, 300);
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