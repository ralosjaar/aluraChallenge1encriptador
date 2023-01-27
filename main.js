let btn1 = document.querySelector(".boton1");
function encriptar() {
    let txtArea = document.querySelector("#txtIn");
    let cadena = txtArea.value;
    let encriptado = "";
    for (let i = 0; i < cadena.length; i++) {
        if ((cadena[i] < 'a' || cadena[i] > 'z') && (cadena[i] != ' ' && cadena[i] != '!')){
            encriptado = "";
            alert("No se aceptan mayusculas ni caracteres especiales");
            break;
        }
        if(cadena[i] == 'a'){
            encriptado += "ai";
        }
        else if(cadena[i] == 'e'){
            encriptado += "enter";
        }
        else if(cadena[i] == 'i'){
            encriptado += "imes";
        }
        else if(cadena[i] == 'o'){
            encriptado += "ober";
        }
        else if(cadena[i] == 'u'){
            encriptado += "ufat";
        }
        else {
            encriptado += cadena[i];
        }
    }
    let txtEncriptado = document.querySelector("#txtOut");
    txtEncriptado.value = encriptado;
}
btn1.onclick = encriptar;
///////////////////////////////////////////////////////////////
let btn2 = document.querySelector(".boton2");
function desencriptar() {
    let txtArea = document.querySelector("#txtIn");
    let cadena = txtArea.value;
    let encriptado = "";
    for (let i = 0; i < cadena.length; i++) {
        if ((cadena[i] < 'a' || cadena[i] > 'z') && (cadena[i] != ' ' && cadena[i] != '!')){
            encriptado = "";
            alert("No se aceptan mayusculas ni caracteres especiales");
            break;
        }
        if(cadena[i] == 'a'){
            encriptado += cadena[i];
            key = cadena[i];
            key += cadena[i+1];
            if(key == "ai"){
                i += 1;
            }
        }
        else if(cadena[i] == 'e'){
            encriptado += cadena[i];
            key = cadena[i];
            key += cadena[i+1];
            key += cadena[i+2];
            key += cadena[i+3];
            key += cadena[i+4];
            if(key == "enter"){
                i += 4;
            }
        }
        else if(cadena[i] == 'i'){
            encriptado += cadena[i];
            key = cadena[i];
            key += cadena[i+1];
            key += cadena[i+2];
            key += cadena[i+3];
            if(key == "imes"){
                i += 3;
            }
        }
        else if(cadena[i] == 'o'){
            encriptado += cadena[i];
            key = cadena[i];
            key += cadena[i+1];
            key += cadena[i+2];
            key += cadena[i+3];
            if(key == "ober"){
                i += 3;
            }
        }
        else if(cadena[i] == 'u'){
            encriptado += cadena[i];
            key = cadena[i];
            key += cadena[i+1];
            key += cadena[i+2];
            key += cadena[i+3];
            if(key == "ufat"){
                i += 3;
            }
        }
        else {
            encriptado += cadena[i];
        }
    }
    let txtDesencriptado = document.querySelector("#txtOut"); 
    txtDesencriptado.value = encriptado;
}
btn2.onclick = desencriptar;
let btn3 = document.querySelector(".boton3");
function copy() {
    let copyText = document.querySelector("#txtOut");
    copyText.select();
    document.execCommand("copy");
  }
   btn3.onclick = copy;

   let btn0 = document.querySelector(".boton0");
   function limpiar() {
    let texto = document.querySelector("#txtIn");
    texto.value = '';
  }
   btn0.onclick = limpiar;
  