// Função Anônima - nao esta associada a um identifivador

// const hello = function() 
// {
//     return 'Hello world'
// }
// console.log(hello())

let soma = function(...num) // parametro rest
{
    let res = 0
    for(n of num)
    {
        res += n
    }

    return res
}

let somarNumeros = soma(2, 5, 20)
console.log(somarNumeros)