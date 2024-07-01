function validacao(){
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let email = document.getElementById("email");
    let c_email = document.getElementById("c_email");

    let nascimento = document.getElementById("nascimento");
    
    

    alerta (nome, "#ff0000");
    alerta (sobrenome, "#ff0000");
    alerta (email, "#ff0000");
    alerta (c_email, "#ff0000");
    alerta (nascimento, "#ff0000");
    
}

    function alerta(input, cor){

    var erro = document.getElementById("erro");

    if(!input.checkValidity()){
        erro.style.display = "block";
        return input.style.border = `1px solid ${cor}`;
    }
}