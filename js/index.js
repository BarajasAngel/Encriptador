var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
console.info('Accion:', );
swal("Copiado", "Ahora colócalo donde puedas desencriptarlo!", "success");

e.clearSelection();
});

function Encriptar(){
    var encriptado = "";
    var input1 = document.getElementById("input1").value;

    if(!/[A-Z\u003A-\u0060\u007B-\u10FFFF\x23-\x2D]/.test(input1)){
        encriptado = input1.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");        
        document.getElementById("input2").value = encriptado;        
        document.getElementById("advertencia").style.color = "#495057";
        document.getElementById("imagen").style.display = "none";            
        document.getElementById("desencriptar").className = "desencriptar-mostrar"    ;
    }
    else{
        document.getElementById("advertencia").style.color = "red";        
    }
}

function Desencriptar(){
    var desencriptado = "";
    var input1 = document.getElementById("input1").value;
    if(!/[A-Z\u003A-\u0060\u007B-\u10FFFF\x23-\x2D]/.test(input1)){
        desencriptado = input1.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");   
        document.getElementById("input2").value = desencriptado;             
        document.getElementById("advertencia").style.color = "#495057";        
    }else{
        document.getElementById("advertencia").style.color = "red";        
    }
}

