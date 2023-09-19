function generateTable()
{
    let number = parseFloat(document.querySelector('#txtn').value)
    let table = document.querySelector('#seltab')

    if (isNaN(number))
    {
        alert(`Preencha os campos corretamente!`)
    }

    else
    {
        let count = 1
        table.innerHTML = null // limpar campo da tabuada
        while(count <= 10)
        {
            let item = document.createElement('option')
            let res = number * count
            item.text = `${number} x ${count} = ${res}`
            table.appendChild(item)
            count++
        }
    }
}

