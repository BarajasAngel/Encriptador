

function limpiarInput1(){
    var input1 = document.getElementById("input1").value;
    if(input1 == "Ingresa el texto aquí"){
        document.getElementById("input1").value = "";
    }
}


function Encriptar(){
    var encriptado = "";
    var input1 = document.getElementById("input1").value;

    if(!/[A-Z\u003A-\u0060\u007B-\u10FFFF\x23-\x2D]/.test(input1)){
        encriptado = input1.replace(/a/g,"ai").replace(/e/g,"enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
        alert(encriptado);
        
        document.getElementById("advertencia").style.color = "#495057";
    }
    else{
        document.getElementById("advertencia").style.color = "red";        
    }
}

function Desencriptar(){
    var desencriptado = "";
    var input1 = document.getElementById("input1").value;
    if(!/[A-Z\u003A-\u0060\u007B-\u10FFFF\x23-\x2D]/.test(input1)){
        desencriptado = input1.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");                
        document.getElementById("advertencia").style.color = "#495057";
        alert(desencriptado);
    }else{
        document.getElementById("advertencia").style.color = "red";        
    }
}