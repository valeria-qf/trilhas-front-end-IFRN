var idade = 6

console.log(`Idade: ${idade}`)

if (idade < 16)
{
    console.log('Näo vota') // utilizando o node.js
}

else if (idade < 18 || idade > 65)
{
        console.log('Voto opcional')
}

else
{
    console.log('Voto obrigatório')
}

