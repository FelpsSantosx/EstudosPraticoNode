const gerenciadorDeTarefas = () => {
    tarefas = []
    return {
        adicionar: (nomeDaTarefa, prioridadeDaTarefa) => {
            tarefas.push({ tarefa: nomeDaTarefa, prioridade: prioridadeDaTarefa })
            return tarefas
        },
        remover: (nomeDaTarefa) => {
            tarefas = tarefas.filter(tarefa => tarefa.tarefa !== nomeDaTarefa)
            return tarefas
        },
        listar: () => {
            return tarefas
        },
        filtrar: (prioridadeDaTarefa) => {
            return tarefas.filter(tarefa => tarefa.prioridade === prioridadeDaTarefa)
        }
    }
}

const gerirTarefas = gerenciadorDeTarefas()
gerirTarefas.adicionar("Estudar JavaScript", "Alta");
gerirTarefas.adicionar("Fazer Exercícios", "Média");
gerirTarefas.adicionar("Estudar", "Alta")
gerirTarefas.adicionar("Comprar comida", "Baixa")
gerirTarefas.adicionar("Lavar a roupa", "Média")
console.log(gerirTarefas.listar())  // Lista todas as tarefas
console.log(gerirTarefas.filtrar("Alta"))  // Filtra tarefas com prioridade "Alta"


const gerenciadorDeProjetosComTarefas = () => {
    let projetos = []
    return {
        addProj: (nomeDoProjeto, prazo) => {
            projetos.push({
                nome: nomeDoProjeto, prazo: prazo, tarefas: []
            })
        },
        addTaref: (nomeDoProjeto, nomeDaTarefa, prioridadeDaTarefa, statusDaTarefa) => {
            const projeto = projetos.find(proj => proj.nome === nomeDoProjeto)
            if (projeto) {
                projeto.tarefas.push({
                    tarefa: nomeDaTarefa, prioridade: prioridadeDaTarefa, status: statusDaTarefa
                })
            } else {
                console.log(`Não é possível adicionar uma tarefa poís não existe este ${nomeDoProjeto}`)
            }
        },
        removProj: (nomeDoProjeto) => {
            projetos = projetos.filter(proj => proj.nome !== nomeDoProjeto)
        },
        listProj: () => {
            return projetos;
        },
        filtrarProPriori: (prioridadeDaTarefa) => {
            return projetos.flatMap(proj => proj.tarefas).filter(tarefa => tarefa.prioridade === prioridadeDaTarefa)
        },
        calcTaref: () => {
            return projetos.reduce((total, proj) =>
                total + proj.tarefas.length, 0
            )
        }

    }
}

const sistema = gerenciadorDeProjetosComTarefas();

// Adicionando projetos
sistema.addProj("Projeto A", "2024-12-31");
sistema.addProj("Projeto B", "2024-11-15");

// Adicionando tarefas aos projetos
sistema.addTaref("Projeto A", "Tarefa 1", "Alta", "Pendente");
sistema.addTaref("Projeto A", "Tarefa 2", "Média", "Concluído");
sistema.addTaref("Projeto B", "Tarefa 3", "Baixa", "Pendente");

// Listando todos os projetos e tarefas
console.log(sistema.listProj());

// Filtrando tarefas por prioridade
console.log(sistema.filtrarProPriori("Alta"));

// Calculando o total de tarefas
console.log(`Total de tarefas: ${sistema.calcTaref()}`);

// Removendo um projeto
sistema.removProj("Projeto A");

// Listando novamente após remover um projeto
console.log(sistema.listProj());
