const pratosDisponiveis = ["Pizza", "Hambúrguer", "Sushi", "Salada", "Lasanha"];
const bairrosDisponiveis = ["Centro", "Matatu", "Campo Grande"];
const pedidos = []

const simuladorDePedidos = (prato) => {
    return new Promise((resolve, reject) => {
        console.log(`Fazendo pedido para: ${prato}`)
        setTimeout(() => {
            if (pratosDisponiveis.includes(prato)) {
                const pedido = {
                    id: Math.floor(Math.random() * 1000),
                    prato,
                    tempoPreparado: Math.floor(Math.random() * 5) + 1,
                }
                pedidos.push(pedido)
                resolve(pedido)
            } else {
                reject(`Erro: O prato "${prato}" não está disponível.`)
            }
        }, 1500)
    })
}

const preparoDePedido = (id) => {
    return new Promise((resolve, reject) => { 
        console.log("Preparando pedido...")
        setTimeout(() => {
            const pedidoEncontrado = pedidos.find(ped => ped.id === id)
            if (pedidoEncontrado) {
                resolve(pedidoEncontrado)
            } else {
                reject(`Erro: Pedido com ID ${id} não foi encontrado.`)
            }

        }, 3400)
    })
}

const idAleatoria = Math.random() * 1000

const pedidoEntrega = (pedido, bairro) => {
    return new Promise((resolve, reject) => {
        console.log(`Verificando entrega para o bairro: ${bairro}`)
        setTimeout(() => {
            if (bairrosDisponiveis.includes(bairro)) {
                resolve(`Entrega do prato ${pedido.prato} (ID: ${pedido.id}) realizada com sucesso no bairro ${bairro}!`)
            } else {
                reject(`Desculpe, não fazemos entregas no bairro: ${bairro}.`)
            }
        }, 4500)
    })
}


simuladorDePedidos("Pizza")
    .then((pedido) => {
        console.log(`pedido realizado com sucesso: ${JSON.stringify(pedido)}`)
        return preparoDePedido(pedido.id)
    }).then((pedido) => {
        console.log(`Pedido com ID ${pedido.id} (${pedido.prato}) está pronto!`)
        return pedidoEntrega(pedido, "Matatu")
    }).then((mensagemEntrega) => {
        console.log(mensagemEntrega);
    }).catch((erro) => {
        console.error(erro);
    });
