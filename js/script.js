const textArea = document.querySelector(".text-area")
const message = document.querySelector(".message")
const buttonCopy = document.querySelector(".btn-copy")

function btnEncrypt() {
    const textEncrypted = encrypt(textArea.value) 
    message.value = textEncrypted   
    textArea.value = ""
    message.style.backgroundImage = "none"
    buttonCopy.style.visibility = "visible"
}

function btnDecrypt() {
    const textDecrypted = decrypt(textArea.value) 
    message.value = textDecrypted   
}

function btnCopy() {
    const textCopied = copy(message.value)
}

function encrypt(stringEncrypted) {
    let matrixCode =[["e","enter"],["o","ober"],["i","imes"],["a","ai"],["u","ufat"]] 
    stringEncrypted = stringEncrypted.toLowerCase()

    for (let index = 0; index < matrixCode.length; index++) {
        if (stringEncrypted.includes(matrixCode[index][0])) {
            stringEncrypted = stringEncrypted.replaceAll(matrixCode[index][0], matrixCode[index][1])
        }
    }
    return stringEncrypted
}

function decrypt(stringDecrypted) {
    let matrixCode =[["e","enter"],["o","ober"],["i","imes"],["a","ai"],["u","ufat"]] 
    stringDecrypted = stringDecrypted.toLowerCase()

    for (let index = 0; index < matrixCode.length; index++) {
        if (stringDecrypted.includes(matrixCode[index][1])) {
            stringDecrypted = stringDecrypted.replaceAll(matrixCode[index][1], matrixCode[index][0])
        }
    }
    return stringDecrypted
}

function copy(text) {
    navigator.clipboard.writeText(text)
    alert("Texto Copiado")
    return text
}