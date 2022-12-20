let inputText = document.getElementById('input-text');
let outputText = document.getElementById('output-text');
let btnEnc = document.getElementById('btn-enc');
let btnDes = document.getElementById('btn-des');
let btnCopy = document.getElementById('btn-copy');

let words = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let vowels = ['a', 'e', 'i', 'o', 'u'];

let encrypt =  () => {
    let word = inputText.value;
    let encryptedWord = '';

    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word.charAt(i))){
            encryptedWord += words[vowels.indexOf(word.charAt(i))];
        }else{
            encryptedWord += word.charAt(i);
        }
    }

    return encryptedWord;
}

let decrypt = () => {
    let word = inputText.value;
    let decryptedWord = '';

    for(let i = 0; i < words.length; i++){
        word = word.replaceAll(words[i], vowels[i]);
        decryptedWord = word;
    }

    return decryptedWord;
}

let loadEncryptedWord = () => {
    outputText.value = encrypt();
}

let loadDecryptedWord = () => {
    outputText.value = decrypt();
}

let copyToClipboard = () => {
    navigator.clipboard.writeText(outputText.value);
}

btnEnc.onclick = loadEncryptedWord;
btnDes.onclick = loadDecryptedWord;
btnCopy.onclick = copyToClipboard;