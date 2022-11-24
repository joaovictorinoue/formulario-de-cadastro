function Salvar(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let consenha = document.getElementById('consenha').value
    let endereco = document.getElementById('endereco').value
    let numero = document.getElementById('numero').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let linha ="<tr><td>" + nome + "<td><td>" + sobrenome + "<td><td>" + email + "<td><td>" + endereco + "<td><td>" + numero + "<td><td>" + cidade + "<td><td>" +  estado + "<td><tr>"
    document.getElementById('tabela').innerHTML += linha

    document.getElementById('nome').value = ('')
    document.getElementById('sobrenome').value = ('')
    document.getElementById('email').value = ('')
    document.getElementById('senha').value = ('')
    document.getElementById('consenha').value = ('')
    document.getElementById('endereco').value = ('')
    document.getElementById('numero').value = ('')
    document.getElementById('cidade').value = ('')
    document.getElementById('estado').value = ('')
}