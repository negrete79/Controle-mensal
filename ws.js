// Este arquivo funciona como o banco de dados local do seu projeto
const DadosProjeto = {
    investimentos: [
        { item: "Caixa d'água usada (1.000L)", qtd: 1, valor: 250.00 },
        { item: "Aerador (Bomba de Oxigênio)", qtd: 1, valor: 80.00 },
        { item: "Alevinos de Tilápia", qtd: 100, valor: 1.20 },
        { item: "Gaiola de Codorna (Bateria)", qtd: 1, valor: 180.00 },
        { item: "Filhotes de Codorna", qtd: 100, valor: 4.00 },
        { item: "Sementes e Mangueiras", qtd: 1, valor: 100.00 }
    ],
    caixaMensal: [
        { tipo: "ENTRADA (+)", detalhe: "Venda de Ovos de Codorna (80 cartelas)", valor: 800.00 },
        { tipo: "ENTRADA (+)", detalhe: "Venda de Verduras da Horta Orgânica", valor: 500.00 },
        { tipo: "ENTRADA (+)", detalhe: "Ganho Estimado dos Peixes (Engorda)", valor: 125.00 },
        { tipo: "CUSTO (-)", detalhe: "Ração de Postura (Codornas - 90kg)", valor: -270.00 },
        { tipo: "CUSTO (-)", detalhe: "Ração de Engorda (Tilápias - 10kg)", valor: -45.00 },
        { tipo: "CUSTO (-)", detalhe: "Embalagens Plásticas para Ovos", valor: -60.00 }
    ]
};
