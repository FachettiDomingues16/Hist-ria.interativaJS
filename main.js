const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "Você priorizou o futuro da cidade investindo nas escolas e na capacitação dos jovens."
      },
      {
        texto: "Saúde.",
        afirmacao: "Você garantiu atendimento imediato para a população, estruturando os postos de saúde e hospitais."
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "Sua gestão focou em obras estruturais pesadas para renovar a rede de abastecimento e conter vazamentos."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "Você apostou na educação ambiental, engajando a comunidade para economizar recursos valiosos."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "Você resolveu a urgência de forma rápida, limpando os bairros e mantendo as ruas organizadas."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "Sua decisão promoveu a economia circular, gerando empregos e reduzindo o impacto ambiental a longo prazo."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: "Melhorar o transporte público.",
        afirmacao: "Você incentivou a mobilidade urbana sustentável, oferecendo alternativas de qualidade ao uso de carros."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "Você focou na fluidez imediata dos veículos para descongestionar as principais avenidas do município."
      }
    ]
  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: "A cidade ficou mais sustentável.",
        afirmacao: "Ao término do seu mandato, a população celebra uma gestão equilibrada que transformou a cidade em um modelo ecológico."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "Seu mandato impulsionou o desenvolvimento e os serviços essenciais, deixando o desafio da sustentabilidade para o próximo prefeito."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual>= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = ""
}



mostraPergunta();