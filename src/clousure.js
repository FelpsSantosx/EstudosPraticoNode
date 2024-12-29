// Craindo um Clousure

const rodarContador = () => {
    let contador = 0
    return {
        incrementar: (passos = 1) => {
            contador += passos
            return contador
        },
        incrementarComFor: (quant) => {
            for (let i = 0; i < quant; i++) {
                contador++
            }
            return contador
        },
        obterValor: () => {
            return contador
        }
    }
}

const meuConatdor = rodarContador()
console.log(meuConatdor.incrementar(5))
console.log(meuConatdor.incrementarComFor(15))
console.log(meuConatdor.obterValor())


const criarBancoDeDados = () => {
    let dados = []

    return {
        adicionar: (novoNome, novaIdade) => {
            dados.push({ nome: novoNome, novaIdade })
            return dados
        },
        remover: (removerNome, removerIdade) => {
            dados = dados.filter((usuario) => usuario.nome !== removerNome && usuario.idade !== removerIdade)
            return dados
        },
        listar: () => {
            return dados
        }

    }

}

const banco = criarBancoDeDados();
banco.adicionar("Felipe", 21)
banco.adicionar("Carlos", 30)
banco.remover("Felipe", 21)
console.log(banco.listar())