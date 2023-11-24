function subtraindo(vitorias, derrotas){
    let subtracao = (vitorias - derrotas)
    return subtracao

}

let saldoDevitorias = subtraindo(90,5)
let niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

for (nivel in niveis){
    if (saldoDevitorias <= 10){
        nivel = "Ferro"

    }

    else if (saldoDevitorias <= 20){
        nivel = "Bronze"

    }

    else if (saldoDevitorias <= 50){
        nivel = "Prata"

    }
    
    else if (saldoDevitorias <= 80){
        nivel = "Ouro"

    }

    else if (saldoDevitorias <= 90){
        nivel = "Diamante"

    }

    else if (saldoDevitorias <= 100){
        nivel = "Lendário"

    }

    else if (saldoDevitorias > 100){
        nivel = "Imortal"

    }
}

console.log(`O herói tem saldo de ${saldoDevitorias} está no nivel ${nivel}. `)

