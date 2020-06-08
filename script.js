
function validaCPF() {
    console.log("Chamando valida cpf");
    let cpfDigitado = document.getElementById("cpf").value;
    let resposta = false;
    if (!validaNumerosIguais(cpfDigitado) && validaPrimeiroDigito(cpfDigitado) && validaSegundoDigito(cpfDigitado)) 
        resposta = true;
    document.getElementById("respostaValidaCPF").innerHTML = "CPF Digitado é " + resposta;
}

function validaNumerosIguais(cpf) {
    let numerosIguais = true;
    for (i = 0; i < cpf.length -1; i++) {
        if (cpf.charAt(i) != cpf.charAt(i+1)) {
            numerosIguais = false;
        }
    }
    if (numerosIguais)
        console.log("Numeros iguais!");

    return numerosIguais;
}

function validaPrimeiroDigito(cpf) {
    let cpfTratado = trataCPF(cpf);
    let soma = 0;
    console.log(cpfTratado);
    if (cpfTratado.length != 11) {
        console.log("Tamano diferente de 11")
        return false;
    } else {
        let primeiroDigito = cpfTratado.charAt(9); // pega primeiro digito verificador
        for (var i = 0; i < cpfTratado.length - 2; i++) {
            soma += cpfTratado.charAt(i)*(10-i);
        }
        let resto = soma*10 % 11;
        if (resto == 10) 
            resto = 0;
        console.log("VALOR RESTO primeiro digito: " + resto);
        if (primeiroDigito == resto) {
            console.log("Primeiro digito validado");
            return true;
        }
        else {
            console.log("Primeiro digito falhou");
            return false;
        }
    }
    
}

function validaSegundoDigito(cpf) {
    let cpfTratado = trataCPF(cpf);
    let soma = 0;
    if (cpfTratado.length != 11) {
        console.log("Tamano diferente de 11")
        return false;
    } else {
        let segundoDigito = cpfTratado.charAt(10); // pega primeiro digito verificador
        for (var i = 0; i < cpfTratado.length - 1; i++) {
                soma += cpfTratado.charAt(i)*(11-i);
        }
        let resto = soma*10 % 11;
        console.log("VALOR RESTO segundo digito: " + resto);
        if (resto == 10) 
            resto = 0;
        if (segundoDigito == resto) { 
            console.log("Segundo digito validado");
            return true;
        }
        else { 
            console.log("Segundo digito falhou");
            return false;
        }
    }
}

function trataCPF(cpf) {
    let novoCPF = cpf.replace(/\./g,'');
    let cpfTratado = novoCPF.replace(/-/g,'');
    return cpfTratado;
}


