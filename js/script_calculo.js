// taxa fixa do seguro obrigatório: 10% do valor do veículo
const TAXA_SEGURO = 0.10;

// taxas de IPVA por tipo de combustível
const TAXAS_IPVA = {
    gasolina: 0.20,
    etanol: 0.15,
    bicombustivel: 0.10,
    hibrido: 0.08,
    eletrico: 0.02
};

// calcula a idade do veículo a partir do ano de fabricação
const calcularIdadeVeiculo = (ano) => new Date().getFullYear() - ano;

// recebe um objeto veiculo e retorna os custos necessários
export const calcularCustosDoVeiculo = (veiculo) => {
    const { placa, modelo, marca, ano, valor, combustivel } = veiculo;
    const idade = calcularIdadeVeiculo(ano);

    // seguro é sempre 10% do valor do veículo
    const seguro = valor * TAXA_SEGURO;

    // logica para veículos com mais de 20 anos são isentos de IPVA
    const ipvaIsento = idade > 20;
    let ipva = 0;

    if (!ipvaIsento) {
        // calcula IPVA de acordo com o combustível
        ipva = valor * (TAXAS_IPVA[combustivel] || 0);
    }

    return {
            placa,
            modelo,
            marca,
            ano,
            seguro,
            ipva,
            ipvaIsento
    };
};