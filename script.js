function calculate(){
    var paciente = document.getElementById("paciente");
    var height = document.getElementById ("height");
    var weight = document.getElementById ("weight");
    
    var imc = weight.value / (height.value/100) ** 2;
    
    if(imc<18.5) {
        text="Você está magro!"
    }
    else if(imc<24.9){
        text="Você está normal!"
    }
    else if(imc<29.9){
        text="Você está com sobrepeso!"
    }
    else if(imc<39.9){
        text="Você está obesidade!"
    }
    else if(imc>39.9){
        text="Você está obesidade morbida!"
    }
    document.getElementById("text_area").innerText=text
    
}

function limp() {
    
    height.value = "";
    weight.value = "";
    paciente.value = "";
}