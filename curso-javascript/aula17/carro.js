carro = {
    Marca : 'Ford',
    Modelo : 'Ka',
    Caracteristicas : ['Preto', 1.0, '2 portas'],

    exibirDetalhes : function()
    {
        console.log(`marca: ${this.Marca}\nmodelo: ${this.Modelo}`) 
    }

}

carro.exibirDetalhes()
console.log(carro.Caracteristicas[0])
