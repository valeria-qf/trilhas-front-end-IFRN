function search() {
    var txt1 = document.getElementById('country');
    var country = txt1.value;
    var msg = document.getElementById('msg');

    if (isNaN(country)) 
    {
        if (country.toUpperCase() == 'BRASIL') 
        {
            msg.innerHTML = `${country} - Nacionalidade: Brasileiro!`
        }

        else if(country.toUpperCase() == 'EUA' | country.toUpperCase() == 'ESTADOS UNIDOS' | country.toUpperCase() == 'USA')
        {
            msg.innerHTML = `${country} - Nacionalidade: Estadunidense`
        }

        else 
        {
            msg.innerHTML = `${country} - Nacionalidade: Estrangeiro`
        }
    } 
    
    else {
        msg.innerHTML = 'País inválido!';
    }
}
