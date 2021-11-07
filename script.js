onload = () => { //Faz com que os botoes recebam os valor estipulados
    document.querySelector('#bt-0').onclick = () => digito(0)
    document.querySelector('#bt-1').onclick = () => digito(1)
    document.querySelector('#bt-2').onclick = () => digito(2)
    document.querySelector('#bt-3').onclick = () => digito(3)
    document.querySelector('#bt-4').onclick = () => digito(4)
    document.querySelector('#bt-5').onclick = () => digito(5)
    document.querySelector('#bt-6').onclick = () => digito(6)
    document.querySelector('#bt-7').onclick = () => digito(7)
    document.querySelector('#bt-8').onclick = () => digito(8)
    document.querySelector('#bt-9').onclick = () => digito(9)
    document.querySelector('#bt-pon').onclick = virgula
    document.querySelector('#bt-ac').onclick = limpa
    document.querySelector('#bt-c').onclick = apagar
    document.querySelector('#bt-mul').onclick = () => operacao('*')
    document.querySelector('#bt-div').onclick = () => operacao('/')
    document.querySelector('#bt-men').onclick = () => operacao('-')
    document.querySelector('#bt-mai').onclick = () => operacao('+')
    document.querySelector('#bt-igua').onclick = calcular
}

let valor = '0'; //valor mostrado na tela
let novoNume = true //indica se havera um novo valor
let antNum = 0 //valor agumulado para calculo
let opPen = null //operacao acumulada

//Atualizador de valores
const atValor = () =>{
    let [parInt, parDec] = valor.split(',')
    let v = ''
    c = 0
    for(let i = parInt.length-1; i>=0; i--){
        if(++c>3){
            v = '.' + v
            c = 1
        }
        v = parInt[i] + v
    }
    v = v + (parDec ? ',' + parDec : '')
    document.querySelector('#display').innerText = v
}

//Botoes de gigitos
const digito = (n) => {
    if(novoNume){
        valor = ''+n
        novoNume = false
    }else valor += n
    atValor()
}

//comando de ponto decimal
const virgula = () =>{
    if(novoNume){
        valor = '0,'
        novoNume = false
    }else if (valor.indexOf(',') == -1) valor += ','
    atValor()
}

//Funcao botao AC (all clear)
const limpa = () => {
    novoNume = true
    opPen = null
    antNum = 0
    valor = '0'
    atValor()
}

//Comando para apagar C (apgar unidade)
const apagar = () => {
    valor = valor.substring(0, valor.length -1)
    atValor()
}

//convertor do valor para real
const valorAtual = () => parseFloat(valor.replace(',', '.'))

//Atribuicao de operadores logicos
const operacao = (op) => {
    calcular()
    //adiciona uma nova operacao
    antNum = valorAtual()
    opPen = op
    novoNume = true
}

const calcular = () =>{
    if(opPen!=null){
        let result
        switch(opPen){
            case '+': result = antNum + valorAtual()
            break
            case '-': result = antNum - valorAtual()
            break
            case '*': result = antNum * valorAtual()
            break
            case '/': result = antNum / valorAtual()
            break
        }
        valor = result.toString().replace('.', ',')
    }
    novoNume = true
    opPen = null
    antNum = 0
    atValor()
}
