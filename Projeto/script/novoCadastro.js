
function selecionarInput (event){
    const inputClicado = event.target;

    function removeSelecao () {
        inputClicado.checked = false;
    }

    inputClicado.addEventListener('click',removeSelecao, {once:true});
}

function gravar(){
    //debugger;

    var nome = document.getElementById('inome').value;
    if (nome.length>2){
        location.href ="cadastro.html";
        alert('Usuario Cadastrado');
    } else{
        alert('Preencher o campo "nome" corretamente');
    }

    }