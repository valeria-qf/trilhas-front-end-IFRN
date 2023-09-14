function parOuImpar(number)
{
    if (number%2 ==0)
    {
        return 'Par'
    }

    else
    {
        return 'Ímpar'
    }
}

let number = 10
let res = parOuImpar(number)
console.log(res)