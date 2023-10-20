const variaveis = JSON.parse(sessionStorage.getItem('variaveis')) || {};
const regras = JSON.parse(sessionStorage.getItem('regras')) || [];

function carregarDadosDoSessionStorage() {
  adicionarVariavel()
  adicionarRegra()
}

window.onload = carregarDadosDoSessionStorage;

function adicionarVariavel() {
  const nomeVariavel = document.getElementById("nomeVariavel").value;
  const valorVariavel = document.getElementById("valorVariavel").value;

  if (nomeVariavel && valorVariavel) {
    if (!variaveis[nomeVariavel]) {
        variaveis[nomeVariavel] = [];
    }
    variaveis[nomeVariavel].push(valorVariavel);
    atualizarListaVariaveis();
    document.getElementById("nomeVariavel").value = "";
    document.getElementById("valorVariavel").value = "";
    atualizarSelecoesRegras();
  }
  sessionStorage.setItem('variaveis', JSON.stringify(variaveis));
  atualizarListaVariaveis();
}

function adicionarRegra() {
  const selecionarVariavelRegra = document.getElementById("selecionarVariavelRegra");
  const selecionarValorRegra = document.getElementById("selecionarValorRegra");
  const nomeVariavel = selecionarVariavelRegra.value;
  const valorVariavel = selecionarValorRegra.value;

  if (nomeVariavel && valorVariavel) {
      const regra = `${nomeVariavel} = ${valorVariavel}`;
      regras.push(regra);
      atualizarListaRegras();
  }
  sessionStorage.setItem('regras', JSON.stringify(regras));
  atualizarListaRegras();
}

function atualizarListaVariaveis() {
  const listaVariaveis = document.getElementById("listaVariaveis");
  listaVariaveis.innerHTML = "";

  for (const variavel in variaveis) {
      const itemLista = document.createElement("li");
      itemLista.textContent = `${variavel} = ${variaveis[variavel].join(', ')}`;
      listaVariaveis.appendChild(itemLista);
  }
}

function atualizarListaRegras() {
  const listaRegras = document.getElementById("listaRegras");
  listaRegras.innerHTML = "";

  regras.forEach((regra, indice) => {
      const itemLista = document.createElement("li");
      itemLista.textContent = `${indice + 1}. ${regra}`;
      listaRegras.appendChild(itemLista);
  });
}

function atualizarSelecoesRegras() {
  const selecionarVariavelRegra = document.getElementById("selecionarVariavelRegra");
  const selecionarValorRegra = document.getElementById("selecionarValorRegra");
  selecionarVariavelRegra.innerHTML = '<option value="">Selecione a Variável</option>';
  selecionarValorRegra.innerHTML = '<option value="">Selecione o Valor</option>';

  for (const variavel in variaveis) {
      const opcao = document.createElement("option");
      opcao.value = variavel;
      opcao.textContent = variavel;
      selecionarVariavelRegra.appendChild(opcao);
  }

  // Adicionar um ouvinte de evento para atualizar a seleção de valores quando uma variável é selecionada.
  selecionarVariavelRegra.addEventListener('change', function () {
      const variavelSelecionada = selecionarVariavelRegra.value;
      if (variavelSelecionada) {
          const valores = variaveis[variavelSelecionada];
          selecionarValorRegra.innerHTML = '<option value="">Selecione o Valor</option>';
          valores.forEach(valor => {
              const opcaoValor = document.createElement("option");
              opcaoValor.value = valor;
              opcaoValor.textContent = valor;
              selecionarValorRegra.appendChild(opcaoValor);
          });
      } else {
          selecionarValorRegra.innerHTML = '<option value="">Selecione o Valor</option>';
      }
  });
}

function executarSistemaEspecialista() {
  const resultado = avaliarRegras();
  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function avaliarRegras() {
  // Implemente sua lógica de avaliação de regras aqui
  // Isso é um espaço reservado para uma lógica mais complexa de sistema especialista
  // Você precisaria analisar as regras e usar as variáveis para tomar decisões
  // Este exemplo apenas retorna um resultado de espaço reservado.
  return "Resultado da Avaliação de Regras";
}