function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma String sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado.Digite algo</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    // Inicializa uma string vazia para armazenar o HTML gerado
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
  
    // Itera sobre cada objeto no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descrição = dado.descrição.toLowerCase();
        tags = dado.tags.toLowerCase();
        // Se titulo includes campoPesquisa...
        if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <h2 class="titulo"><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descrição}</p>
            <a href="${dado.link}" target="_blank">Tabela do Brasileirão</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado</p>";
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
  }