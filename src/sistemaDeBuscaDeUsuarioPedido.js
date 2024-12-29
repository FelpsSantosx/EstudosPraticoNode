const buscarUsuario = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id, nome: "João" })
            } else {
                reject("ID do usuário inválido!")
            }
        }, 1500)
    })
}

const buscarPedido = (idUsuario) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idUsuario === 1) {
                resolve(["Pedido 1", "Pedido 2", "Pedido 3"])
            } else {
                reject("Erro ao buscar pedido!")
            }
        }, 2500)
    })
}

const mostrarDadosUsuario = async (id) => {
    try {
        console.log("Buscando usuário...")
        const usuario = await buscarUsuario(id)
        console.log("usuário encontrado", usuario)

        console.log("Buscando pedidos...")
        const pedidos = await buscarPedido(usuario.id)
        console.log("Pedido encontrado", pedidos)
    } catch (erro) {
        console.error("error capturado:", erro)
    }
}

mostrarDadosUsuario(1); 

buscarPedido(2)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro));

