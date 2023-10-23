const baseDeConhecimentoFilmes = [
  {
    nome: "Eduardo e Monica",
    genero: "Romance",
    anoLancamento: 2020,
    premios: "Sim"
  },
  {
    nome: "Forrest Gump",
    genero: "Drama",
    anoLancamento: 1994,
    premios: "Nao"
  },
  {
    nome: "A menina que matou os pais",
    genero: "Crime",
    anoLancamento: 2020,
    premios: "Nao"
  },
  {
    nome: "A menina que matou os pais",
    genero: "Drama",
    anoLancamento: 2013,
    premios: "Nao"
  },
  {
    nome: "Marighella",
    genero: "Biografia",
    anoLancamento: 2019,
    premios: "Nao"
  },
  {
    nome: "O menino da porteira",
    genero: "Drama",
    anoLancamento: 2009,
    premios: "Nao"
  },
  {
    nome: "O tempo e o vento",
    genero: "Romance",
    anoLancamento: 2013,
    premios: "Nao"
  },
  {
    nome: "Cidade de Deus",
    genero: "Crime",
    anoLancamento: 2002,
    premios: "Nao"
  },
  {
    nome: "Bacurau",
    genero: "Suspense",
    anoLancamento: 2019,
    premios: "Sim"
  },
  {
    nome: "Turma da Mônica - Laços",
    genero: "Infantil",
    anoLancamento: 2019,
    premios: "Nao"
  },
  {
    nome: "O Palhaço",
    genero: "Drama",
    anoLancamento: 2011,
    premios: "Não"
  },
  {
    nome: "Assalto ao Banco Central",
    genero: "Crime",
    anoLancamento: 2011,
    premios: "Não"
  },
  {
    nome: "2 Filhos de Francisco",
    genero: "Romance",
    anoLancamento: 2020,
    premios: "Não"
  },
  {
    nome: "O Auto da Compadecida",
    genero: "Comédia",
    anoLancamento: 2000,
    premios: "Sim"
  },
  {
    nome: "Elis & Tom, Só tinha de ser com você",
    genero: "Documentário",
    anoLancamento: 2014,
    premios: "Não"
  },
  {
    nome: "Albatroz",
    genero: "Suspense",
    anoLancamento: 2018,
    premios: "Não"
  },
  {
    nome: "Carandiru",
    genero: "Crime",
    anoLancamento: 2003,
    premios: "Sim"
  },
  {
    nome: "Minha Mãe é uma Peça",
    genero: "Comédia",
    anoLancamento: 2013,
    premios: "Não"
  },
  {
    nome: "Tropa de Elite",
    genero: "Ação",
    anoLancamento: 2007,
    premios: "Sim"
  },
  {
    nome: "Hoje Eu Quero Voltar Sozinho",
    genero: "Romance",
    anoLancamento: 2014,
    premios: "Sim"
  },
];

// Função para realizar a inferência com base nos critérios
function inferirFilmes(genero, ano, premios) {
  const filmesRecomendados = [];
  for (const filme of baseDeConhecimentoFilmes) {
    if (
      filme.genero === genero &&
      filme.anoLancamento === ano &&
      filme.premios === premios
    ) {
      filmesRecomendados.push(filme.nome);
    }
  }
  return filmesRecomendados;
}

// Exemplo de uso da função para buscar filmes com os critérios especificados
const genero = "Comédia";
const ano = 2013;
const premios = "Não";

const filmesRecomendados = inferirFilmes(genero, ano, premios);

if (filmesRecomendados.length > 0) {
  console.log(`Filmes recomendados para o critério: Gênero: ${genero}, Ano: ${ano}, Prêmios: ${premios}`);
  filmesRecomendados.forEach(filme => {
    console.log(filme);
  });
} else {
  console.log("Nenhum filme encontrado com os critérios especificados.");
}