function somar() {
    var num1 = document.getElementById("n1").value
    var num2 = document.getElementById("n2").value
    var resultado = document.getElementById("Resultado")
    num1 = Number(num1)
    num2 = Number(num2)
    Resultado = num1 + num2
    resultado.innerHTML = (`O resultado da soma entre ${num1} + ${num2} é igual a: ${Resultado}`)

}

var nome = window.prompt (`Qual o seu nome?`)// var guarda o nome
document.write(`Olá ${nome}. O seu nome possue ${nome.length} letras <br>`)
document.write(`O seu nome em maiúsculo é ${nome.toLocaleUpperCase()}<br>`)
document.write(`O seu nome em minúsculo é ${nome.toLowerCase()}<br>`)

//Organizar números
var n1 = 21.98563
n1.toFixed(2) // É a quantidade de números após a vírgula
window;alert(n1.toFixed(2),replace('.',','))
n1.toLocaleString('pt-BR', {style:'currency', currency: BRL})
window.alert(n1.toFixed(2))