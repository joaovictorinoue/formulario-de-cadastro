function Salvar(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let linha ="<tr><td>" + nome + "<td><td>" + sobrenome + "<td><tr>"
    document.getElementById('tabela').innerHTML += linha
}