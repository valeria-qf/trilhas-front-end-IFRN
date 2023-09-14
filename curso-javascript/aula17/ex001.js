function soma(...num) // parametro rest
{
    let res = 0
    for(n of num)
    {
        res += n
    }

    return res
}

somarNumeros = soma(2, 5, 20)
console.log(somarNumeros)