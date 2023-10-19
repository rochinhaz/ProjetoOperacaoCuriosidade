function logar(){

    var email = document.getElementById('lemail').value;
    var senha = document.getElementById('lsenha').value;
    
    if (email != "" && senha != ""){
        location.href = "index.html";
    } else{
        alert('Preencher os campos');
    }
}