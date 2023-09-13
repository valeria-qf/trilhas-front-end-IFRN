function adicionarNumero(num)
{
    while(num.length < 10)
    {
        num.push(Math.floor(Math.random() * 10))
    }
}
function imprimeNumero(num)
{
    for(var index in num) // Sintaxe para array e objects
    {
        console.log(num[index])
    }
}


let num = []
adicionarNumero(num)

console.log('----------------')

num.sort()
imprimeNumero(num)

console.log('----------------')

number = 8
let pos = num.indexOf(number) // Descobrir a posição de number

if(pos != -1)
{
    console.log(`o valor ${number} esta na posição ${pos}.`) // Retorna o index em que o valor 7 está armazenado
}

else
    console.log(`${number} nao faz parte do vetor.`)

// let num = [10, 1, 5, 2]
// console.log(num)
// num.push(50)
// console.log(num)
// num.splice(3,1) // incice 3 remove 1 elemento
// console.log(num)