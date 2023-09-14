// Arrow function
// (parametros) => expressao

const soma = (...num) => {
    let res = 0
    for(n of num)
        res += n
    
    return res
}

const par = num => {
    if(num%2 ==0)
        return true
    else
        return false
}

console.log(soma(2, 3, 10, 20))
console.log(par(3))