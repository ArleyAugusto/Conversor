let dolar = 5.5 // Valor fixo - Prox usar Requisições

let usdInput = document.querySelector('#usd')
let brlInput = document.querySelector('#brl')

usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl')
})

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd')
})

usdInput.addEventListener('blur', () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener('blur', () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = '1000,00'
convert('usd-to-brl')


//funções

function formatCurrency(value) {
    // ajustar o valor
    let fixedValue = fixValue(value)
    // utilizar funcao de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2  // casas d
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    // retornar o valor formatado
    return formatter.format(fixedValue)
  
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".") // troca , por ponto
    let floatValue = parseFloat(fixedValue) // transforma string em numero
    if(floatValue  == NaN) { // verifica 
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if(type == 'usd-to-brl') {
    
    //ajustar o valor (substituir virgula por ponto pois sera p/ brasil. )   
    let fixedValue = fixValue(usdInput.value)

    //converter valor
    let result =  fixedValue * dolar
    result = result.toFixed(2)
    //mostrar no campo de real        
    brlInput.value = formatCurrency(result)
    }

    if(type == 'brl-to-usd') {
    
    //ajustar o valor (substituir virgula por ponto pois sera p/ brasil. )   
    let fixedValue = fixValue(brlInput.value)
    //converter valor
    let result = fixedValue / dolar
    result = result.toFixed(2)
    //mostrar no campo de dolar 
    usdInput.value = formatCurrency(result)
    }
}