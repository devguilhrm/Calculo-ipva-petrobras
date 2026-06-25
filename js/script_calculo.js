const TAXA_SEGURO = 0.1;
const VALOR_LICENCIAMENTO = 150;

const TAXAS_IPVA = {
    gasolina: 0.20,
    etanol: 0.15,
    bicombustivel: 0.10,
    hibrido: 0.08,
    eletrico: 0.02
};


const calcularIdadeVeiculo = (ano) => {

    return new Date().getFullYear() - ano;

};


export const calcularCustosDoVeiculo = (valor, ano, combustivel) => {
    const idade = calcularIdadeVeiculo(ano);
    const seguro = valor * TAXA_SEGURO;
    const ipvaIsento = idade > 20;
    let ipva = 0;

    if (!ipvaIsento) {
        ipva = valor * (TAXAS_IPVA[combustivel] || 0);
        
    }

    const licenciamento = VALOR_LICENCIAMENTO;

    const valorFinal = valor + seguro + ipva + licenciamento;

    return {
            idade,
            seguro,
            ipva,
            licenciamento,
            valorFinal,
            ipvaIsento
    };
};