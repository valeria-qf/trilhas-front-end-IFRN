// let v = function(x)
// {
//     return x*2
// }
// console.log(v(5))


// function fatorial(number)
// {
//     let fat = 1
//     for(let count = number; count > 1; count--)
//     {
//         fat *= count
//     }
//     return fat
// }

// console.log(fatorial(4))

function fatorial(number)
{
    if (number == 1)
    {
        return 1
    }

    else
    {
        return number * fatorial(number - 1) // Recursividade
    }
}

console.log(fatorial(5))