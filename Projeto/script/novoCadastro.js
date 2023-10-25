
function selecionarInput (event){
    const inputClicado = event.target;

    function removeSelecao () {
        inputClicado.checked = false;
    }

    inputClicado.addEventListener('click',removeSelecao, {once:true});
}

listar();

function gravar(){
    //debugger;

    var nome = document.getElementById('inome').value;
    var email = document.getElementById('iemail').value;
    var status = document.getElementById('iativo').value;

    var validNome = false;
    var validEmail = false;

    if (nome.length>2 && email.length>2){
        validNome = true;
        validEmail = true;
    }else{
        window.alert('Preencher os campos nome e email corretamente');
    }

    if(status == ""){
        status = "Inativo";
    }else{
        status="Ativo"
    }

    if(validNome == true && validEmail == true){
        let arrayCad = [];
        if(localStorage.getItem('dados')!=null){
            arrayCad=JSON.parse(localStorage.getItem('dados'));
        }else{
            arrayCad;
        }

        var info =
            {
                nome, email,status
            };
        
        arrayCad.push(info);
        var infoJson = JSON.stringify(arrayCad)
        localStorage.setItem('dados', infoJson);

        window.alert('Usuario cadastrado');
        window.location.href ="cadastro.html";

        listar();
    }

    function listar(){
        
        /*const arr = JSON.parse(localStorage.getItem('dados'));

        if (arr != null) {
            let tr = '';
            arr.map(conteudo => {
                tr += `
			        <tr>
					    <td>${conteudo.nome}</td>
					    <td>${conteudo.email}</td>
					    <td>${conteudo.status}</td>
				    </tr>`


        })
            tBody.innerHTML = tr;
        }*/
        
        for(var i in dados){
            var cli =JSON.parse(dados[i]);
            $(".tbUser tbody").append("<tr>");
            $(".tbUser tbody").append("<td>"+cli.nome+"</td>");
            $(".tbUser tbody").append("<td>"+cli.email+"</td>");
            $(".tbUser tbody").append("<td>"+cli.status+"</td>");
        }
        }
    }





/*
var nome = document.getElementById('inome').value;
 if (nome != ""){
        location.href ="cadastro.html";
        alert('Usuario Cadastrado');
    } else{
        alert('Preencher o campo "nome" ');
    }
*/