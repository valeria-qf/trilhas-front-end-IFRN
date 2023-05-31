function calcular() {
    var txtv = document.getElementById('txtvel');
    var res = document.getElementById('res');

    var vel = Number(txtv.value);
    res.innerHTML = `Sua velocidade atual é de ${vel} km/h`;

    if (vel > 60) 
    {
        res.innerHTML += "<br>Você está multado por excesso de velocidade!";
    }
}
