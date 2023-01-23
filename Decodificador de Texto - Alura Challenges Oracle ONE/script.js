const textArea = document.querySelector(".area-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"] ];
  stringEncriptada = stringEncriptada.toLowerCase();
  stringEncriptada = stringEncriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
 

  for (let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}



function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigoReverso = [["enter" , "e"] , ["imes" , "i"] , ["ai" , "a"] , ["ober" , "o"] , ["ufat" , "u"] ];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  stringDesencriptada = stringDesencriptada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
  for (let i = 0; i < matrizCodigoReverso.length; i++) {
    if(stringDesencriptada.includes(matrizCodigoReverso[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigoReverso[i][0], matrizCodigoReverso[i][1]);
    }
  }
  return stringDesencriptada;
}



function copiar() {
  document.querySelector(".mensagem").select();
  document.execCommand("copy");
} 
function btnCopiar() {
  document.getElementById('.btn-copiar').addEventListener('click', copiar);
} 













