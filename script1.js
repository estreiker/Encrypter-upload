


function decryptAll(){ 
    var text1 = document.getElementById("message").value.toLowerCase();
    var textEncrypt = text1.replace(/ai/,"a",);
    var textEncrypt = textEncrypt.replace(/enter/,"e");
    var textEncrypt = textEncrypt.replace(/imes/,"i");
    var textEncrypt = textEncrypt.replace(/ober/,"o");
    var textEncrypt = textEncrypt.replace(/aufat/,"u");


    document.getElementById("message").innerText = textEncrypt;  
    

}

function encryptAll(){ 
    var text1 = document.getElementById("textEncrypt").value.toLowerCase();
    var textEncrypt = text1.replace(/a/,"ai");
    var textEncrypt = textEncrypt.replace(/e/,"enter");
    var textEncrypt = textEncrypt.replace(/i/,"imes");
    var textEncrypt = textEncrypt.replace(/o/,"ober");
    var textEncrypt = textEncrypt.replace(/u/,"aufat");


document.getElementById("message").innerText = textEncrypt; 
  
}



