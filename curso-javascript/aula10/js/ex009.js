function search() {
    var txt1 = document.getElementById('country');
    var country = txt1.value;
    var msg = document.getElementById('msg');

    if (isNaN(country)) {
        if (country.toUpperCase() == 'BRASIL') {
            msg.innerHTML = `${country} - Nacionalidade: Brasileiro!`;
        } else {
            msg.innerHTML = `${country} - Nacionalidade: Estrangeiro`;
        }
    } 
    
    else {
        msg.innerHTML = 'País inválido!';
    }
}
