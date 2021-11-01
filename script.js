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
    document.querySelector('#bt-pon').onclick = () => virgula()
}

let valor = '0';
let novoNume = true

const atValor = () =>{
    document.querySelector('#display').innerText = valor
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