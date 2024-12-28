const produtosDiponiveis = () => {

    const catEstoque = [
        { id: 1, produto: "Arroz", quantidade: 20 },
        { id: 2, produto: "Feijão", quantidade: 15 },
        { id: 3, produto: "Macarrão", quantidade: 30 },
        { id: 4, produto: "Azeite", quantidade: 10 },
        { id: 5, produto: "Farinha", quantidade: 25 },
    ]

    return {
        verificaEstoque: (produto) => {
            const estoque = catEstoque.find(prod => prod.produto.toLowerCase() === produto.toLowerCase())
            return estoque || null
        },
        reduzirEstoque: (produto, quantidade) => {
            const item = catEstoque.find(prod => prod.produto.toLowerCase() === produto.toLowerCase())
            if (!item) {
                return `Produto: ${produto} não foi encontrado na base de dados do nosso estoque`
            } else if (item.quantidade < quantidade) {
                return `Quantidade insuficiente no estoque. Apenas ${item.quantidade} unidades disponíveis.`
            } else {
                item.quantidade -= quantidade
                return `Estoque atualizado: ${item.produto} agora tem ${item.quantidade} unidades.`
            }
        },
        consultaEstoque: () => {
            return catEstoque
        }
    }
}

const verificaProduto = (produto, quantidade) => {
    return new Promise((resolve, reject) => {
        console.log(`Verificando se existe ${produto} com ${quantidade} unidades no nosso estoque`)
        setTimeout(() => {

            const produtos = produtosDiponiveis()
            const estoque = produtos.verificaEstoque(produto)

            if (estoque) {
                if (estoque.quantidade >= quantidade) {
                    resolve(estoque)
                } else {
                    reject(`Quantidade insuficiente de ${produto}. Apenas ${estoque.quantidade} unidades disponíveis.`)
                }
            } else {
                reject(`Produto ${produto} não encontrado no estoque.`)
            }
        }, 1500)
    })

}

const reservaProduto = (produto, quantidade) => {
    return new Promise((resolve, reject) => {
        console.log(`Verificando a possibilidade de fazer uma reserva`)
        setTimeout(() => {

            verificaProduto(produto, quantidade).then(estoque => {
                const produtos = produtosDiponiveis()
                const reserva = produtos.reduzirEstoque(produto, quantidade)
                if (reserva.includes("Estoque atualizado")) {
                    resolve(`${produto} com ${quantidade} unidades foi reservado com sucesso!`)
                } else {
                    reject(reserva)
                }
            }).catch(erro => {
                reject(erro)
            })
        }, 2500)
    })
}

const confirmaCompra = (produto, quantidade) => {
    return new Promise((resolve, reject) => {
        console.log(`Confirmando o pagamento para o produto ${produto} com ${quantidade} unidades`)
        setTimeout(() => {
            const pagamentoAprovado = Math.random() > 0.2

            if (pagamentoAprovado) {
                resolve(`Pagamento confirmado com sucesso! Sua compra de ${produto} foi finalizada.`)
            } else {
                reject(`Erro no pagamento. Não foi possível processar sua compra de ${produto}.`)
            }
        }, 2000)
    })
}

verificaProduto("arroz", 10)
    .then(resposta => {
        console.log(resposta); // Quando o produto for encontrado e a quantidade for suficiente
        return reservaProduto("Arroz", 10); // Faz a reserva
    })
    .then(resposta => {
        console.log(resposta); // Quando a reserva for realizada com sucesso
        return confirmaCompra("Arroz", 10); // Confirma o pagamento
    })
    .then(resposta => {
        console.log(resposta); // Quando o pagamento for confirmado
    })
    .catch(erro => {
        console.log(erro); // Em qualquer erro durante o processo
    });

// Testando com um produto que não tem estoque suficiente
reservaProduto("Feijão", 20)
    .then(resposta => console.log(resposta)) // Quando o produto for encontrado e a quantidade for suficiente
    .catch(erro => console.log(erro)); // Quando houver err
