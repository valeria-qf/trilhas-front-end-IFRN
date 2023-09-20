let table = document.querySelector('#tab')
let numbers_list = []
result = document.querySelector('#result')

function numberIsValid(number) 
{
    if (Number(number) >= 1 && Number(number) <= 100) 
        return true;

    else 
        return false;
}

function isInList(number, numbers_list) 
{
    return numbers_list.includes(number) // verifica se number ja esta incluido na lista
}

function addNumber()
{
    let numberInput = document.querySelector('#txtn')
    let number = parseFloat(numberInput.value)

    if (numberIsValid(number) && !isInList(number, numbers_list)) 
    {
        numbers_list.push(number)

        let option = document.createElement('option')
        option.text = `${number}`
        table.appendChild(option)

        // Limpa o campo de entrada
        numberInput.value = ''
    
        numberInput.focus()
        result.innerHTML = ''
    } 

    else 
    {
        alert(`Valor inválido ou já presente na lista`)
    }
}

function printInfoList()
{
    if(numbers_list.length == 0)
    {
        alert(`Não há valores adicionados`)
    }
    
    else
    {
        let lenghOfList = numbers_list.length

        let greatestNumber = numbers_list[0]
        let smallestNumber = numbers_list[0]
        let sum = 0
        let avarage = 0

        for(let pos in numbers_list)
        {   
            sum += numbers_list[pos]

            if(numbers_list[pos] > greatestNumber)
            {
                greatestNumber = numbers_list[pos]
            }

            if(numbers_list[pos] < smallestNumber)
            {
                smallestNumber = numbers_list[pos]
            }
            
        }
        avarage = sum / lenghOfList
        
        result.innerHTML += `<br> Quantidade de elementos: ${lenghOfList} <br>`
        result.innerHTML += `<br> Maior valor: ${greatestNumber} <br>`
        result.innerHTML += `<br> Menor valor: ${smallestNumber} <br>`
        result.innerHTML += `<br> Soma dos valores: ${sum} <br>`
        result.innerHTML += `<br> Media dos valores: ${avarage} <br>`

    }
}
