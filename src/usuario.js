const buscarUsuario = () => {
  return new Promise((resolve, reject) => {
    console.log("Buscando usuário...");
    setTimeout(() => {
      const sucesso = Math.random() > 0.2;
      if (sucesso) {
        resolve([
          { id: 1, nome: "João" },
          { id: 2, nome: "Maria" },
          { id: 3, nome: "Carlos" },
        ]);
      } else {
        reject("Erro ao buscar usuário. Tente novamente.");
      }
    }, 2000);
  });
};

function buscarDetalhesUsuario(id) {
  return new Promise((resolve, reject) => {
    console.log(`Buscando detalhes do usuário com ID ${id}...`);
    setTimeout(() => {
      if (id) {
        resolve({ id, idade: 25, email: "exemplo@dominio.com" });
      } else {
        reject("ID do usuário é inválido!");
      }
    }, 1500);
  });
}

buscarUsuario()
  .then((usuarios) => {
    console.log("Usuários encontrados:", usuarios);

    const usuario = usuarios.find((u) => u.id === 2);
    if (usuario) {
      return buscarDetalhesUsuario(usuario.id);
    } else {
      throw new Error("Usuário não encontrado");
    }
  })
  .then((detalhes) => {
    console.log("Detalhes do usuário:", detalhes);
  })
  .catch((erro) => {
    console.error("Erro no fluxo:", erro);
  });
