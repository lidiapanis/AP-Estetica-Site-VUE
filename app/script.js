const aplicacao = new Vue({
    el: '#app',
    data: {
      nomeEmpresa: "Andrea Panis Estetica",
      colecaoProcedimentos: [
        { id: 1, nome: 'Alongamento de Cilios', descricao: "Fios naturais ou volumosos"},
        { id: 2, nome: 'Alongamento de Unhas', descricao: "Amendoadas, Curvatura C ou tradicionais"},
        { id: 3, nome: 'Limpeza de Pele', descricao: "Procedimento ideal para rejuvenescimento da pele e tratamento de manchas"},
      ],
      colecaoDepoimentos: [
        { id: 1, cliente: "Lidia", opiniao: "Excelente tecnica de alongamento de unhas, amei a durabilidade" },
        { id: 2, cliente: "Roberta", opiniao: "Todo mês não deixo de fazer a manutenção dos meus cilios, excelente profissional" },
        { id: 3, cliente: "Ana", opiniao: "Profissional excelente, estou amando o tratamento de machas." },
      ],
    }
  });