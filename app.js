// Executa o cálculo automático assim que a página abre no navegador
document.addEventListener("DOMContentLoaded", () => {
    carregarInvestimentos();
    carregarCaixaMensal();
});

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function carregarInvestimentos() {
    const corpoTabela = document.getElementById("tabela-investimento");
    let totalGeral = 0;

    DadosProjeto.investimentos.forEach(item => {
        const totalItem = item.qtd * item.valor;
        totalGeral += totalItem;

        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${item.item}</td>
            <td>${item.qtd}</td>
            <td>${formatarMoeda(item.valor)}</td>
            <td>${formatarMoeda(totalItem)}</td>
        `;
        corpoTabela.appendChild(linha);
    });

    document.getElementById("total-investimento").innerText = formatarMoeda(totalGeral);
}

function carregarCaixaMensal() {
    const corpoTabela = document.getElementById("tabela-caixa");
    let lucroLiquido = 0;

    DadosProjeto.caixaMensal.forEach(item => {
        lucroLiquido += item.valor;
        const classeTipo = item.valor > 0 ? "entrada" : "custo";

        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td class="${classeTipo}">${item.tipo}</td>
            <td>${item.detalhe}</td>
            <td class="${classeTipo}">${formatarMoeda(item.valor)}</td>
        `;
        corpoTabela.appendChild(linha);
    });

    const elementoLucro = document.getElementById("total-lucro");
    const linhaLucro = document.getElementById("linha-lucro");
    
    elementoLucro.innerText = formatarMoeda(lucroLiquido);

    // Se der lucro fica verde, se der prejuízo fica vermelho automaticamente
    if (lucroLiquido >= 0) {
        linhaLucro.classList.add("lucro-positivo");
    } else {
        linhaLucro.classList.add("lucro-negativo");
    }
      }
