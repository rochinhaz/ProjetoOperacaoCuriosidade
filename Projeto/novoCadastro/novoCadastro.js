let nome = document.getElementById('inome');
let labelNome = document.getElementById('labelnome');
let validNome = false;

let msgErro = document.getElementById('msgErro');
let msgValido = document.getElementById('msgValido');

nome.addEventListener('keyup', () =>{
    if(nome.value.length <=2){
        labelNome.setAttribute('style','color: red');
        labelNome.innerHTML = "Nome *insira no minimo 3 caracteres";
        validNome = false;
    }else{
        labelNome.setAttribute('style','color: green');
        labelNome.innerHTML = "Nome";
        validNome = true;
    }
})


function selecionarInput (event){
    const inputClicado = event.target;

    function removeSelecao () {
        inputClicado.checked = false;
    }

    inputClicado.addEventListener('click',removeSelecao, {once:true});
}

function gravar(){

    if(validNome == true){
        msgValido.setAttribute('style', 'display: block');
        msgValido.innerHTML = '<strong>Usuario cadastrado</strong>';
        msgErro.setAttribute('style', 'display: none');
        msgErro.innerHTML = '';
        setTimeout(()=>{
            location.href = "../cadastro/cadastro.html";
        },3000)
    }else{
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong>Preencha o campo nome corretamente</strong>';
        msgValido.setAttribute('style', 'display: none');
        msgValido.innerHTML = '';
    }

}