function contar()
{
    let inicio = parseInt(document.querySelector('section div #txti').value)
    let fim = parseFloat(document.querySelector('section div #txtf').value)
    let pula = parseInt(document.querySelector('section div #txtp').value)
    let resultado = document.querySelector('#resultado p')

    if( isNaN(inicio) || isNaN(fim) || isNaN(pula))
    {
        alert('Preencha os campos corretamente!')
    }

    else
    {
        resultado.innerHTML = 'Contando: '

        if(fim > inicio )
        {   

        for(let count = inicio; count <= fim; count -= pula)
        {   
            resultado.innerHTML += `${count} `
        }
        }

        else
        {
            for(let count = inicio; count >= fim; count -= pula)
        {   
            resultado.innerHTML += `${count} `
        }
    }
    }
}
