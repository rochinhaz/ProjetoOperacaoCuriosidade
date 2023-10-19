function cadPessoa(nome, email, ativo){

    var tb = document.getElementById('tbCad');
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellNome = linha.insertCell(0);
    var cellEmail = linha.insertCell(1);
    var cellAtivo = linha.insertCell(2);

    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;
    cellAtivo.innerHTML = ativo;

}