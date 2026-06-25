// criando array para armazenar veículos
const veiculos = [];

// puxando elementos do DOM
const formVeiculo = document.querySelector('#form-veiculo');
const divListaVeiculos = document.querySelector('#div-lista-veiculos');

// capturar evento submit do formulário
formVeiculo.addEventListener('submit', (evento) => {
    evento.preventDefault();

    // criando um objeto com os dados registrados no HTML
    const dados = new FormData(formVeiculo);

    // criando objeto literal com os dados do veículo
    const veiculo = {
        modelo: dados.get('modelo'),
        marca: dados.get('marca'),
        placa: dados.get('placa').toUpperCase(),
        ano: Number(dados.get('ano')),
        valor: Number(dados.get('valor')),
        combustivel: dados.get('combustivel')
    };

    // chamando a função addVeiculo e passando o objeto literal criado
    addVeiculo(veiculo);

    // função para listar veículos
    listarVeiculos();

    // limpar formulário após cadastrar
    formVeiculo.reset();
});

// função addVeiculo para adicionar veículo no array
const addVeiculo = (objVeiculo) => {
    // adiciona objeto literal no array
    veiculos.push(objVeiculo);
};

// função para listar veículos
const listarVeiculos = () => {
    // limpar conteúdo anterior para não duplicar registros
    divListaVeiculos.innerHTML = '';

// percorrer o array veículos com forEach
    veiculos.forEach((elem, i) => {
        const valorFormatado = elem.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        divListaVeiculos.innerHTML += `
            <div class="veiculo-item">
                <p><strong>Veículo ${i + 1}</strong></p>
                <p>Placa: ${elem.placa}</p>
                <p>Modelo: ${elem.modelo}</p>
                <p>Marca: ${elem.marca}</p>
                <p>Ano: ${elem.ano}</p>
                <p>Valor: R$ ${valorFormatado}</p>
                <p>Combustível: ${elem.combustivel}</p>
            </div>
        `;
    });
};