let nome = document.getElementById('inome');
let labelNome = document.getElementById('labelnome');
let validNome = false;

let msgErro = document.getElementById('msgErro');
let msgValido = document.getElementById('msgValido');

let atividade = "";

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

    if(iativo.checked){
        atividade="ativo"
    }else{
        atividade="inativo"
    }

    let arraycadastro = [];

    if (localStorage.getItem('dados') != null) {
        arraycadastro = JSON.parse(localStorage.getItem('dados'));
    } else {
        arraycadastro;
    }

    let nomeV = document.getElementById("inome").value;
    let emailV = document.getElementById("iemail").value;
    
    var info = {
        nomeV,
        emailV,
        atividade
    };

    arraycadastro.push(info);
    var infoJson = JSON.stringify(arraycadastro);
    localStorage.setItem("dados", infoJson);

    var table = document.getElementById('tbCad');
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    nameCell.innerHTML = nomeV;
    emailCell.innerHTML = emailV;


}