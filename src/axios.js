const axios = require('axios');

const buscarDadosComAxios = async () => {
    try {
        // Fazendo a requisição GET para a API usando o axios
        const resposta = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Exibindo os dados no console
        console.log(resposta.data);
    } catch (erro) {
        console.error('Erro capturado:', erro);
    }
};

buscarDadosComAxios();  // Chama a função para fazer a requisição
