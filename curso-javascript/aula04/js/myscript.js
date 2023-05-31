        window.alert("Minha primeira mensagem!")
        window.confirm("Está gostando de Javascript?")
        
        var nome = window.prompt("Qual é o seu nome?")
        window.alert("Prazer em te conhecer, " + nome + "!") // concatenaçäo

        // Tratamento de dados

        var n1 = Number.parseInt(prompt('Digite um número: ')) // conversäo do dado para inteiro

        // var n2 = Number.parseFloat(prompt('Digite outro número: ')) // conversao do dado para float

        var n2 = Number(prompt('Digite outro número: ')) // Reconhece automaticamente o tipo da variável e converte

        var s = n1 + n2

        alert(`A soma  entre ${n1} e ${n2} é ${String(s)} `) // Utilizando template string para formataçáo

