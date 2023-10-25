
function validarEmail (email) {
    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
     return emailPattern.test(email); 
  }

function logar(){

    var email = document.getElementById('lemail').value;
    var senha = document.getElementById('lsenha').value;
    email =validarEmail(email);

    if (email ==true){
        if(senha.length >= 6 ){
            location.href = "index.html";
        }else{
        alert('Colocar uma senha com 6 digitos ou mais');
        }
    } else{
        alert('Colocar um email valido');
    }
}