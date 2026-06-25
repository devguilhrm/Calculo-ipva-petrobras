# Cadastro de Veículos

Aplicação web para cadastro e listagem de veículos com cálculo automático de seguro e IPVA.

## 📋 Funcionalidades

- **RF01**: Cadastro de veículos com dados: placa, modelo, marca, ano, valor e combustível
- **RF02**: Listagem dinâmica de veículos cadastrados
- **RF03**: Limpeza automática do formulário após envio
- **Cálculo automático de custos**:
  - Seguro: 10% do valor do veículo
  - IPVA: varia de acordo com o tipo de combustível
  - Isenção de IPVA para veículos com mais de 20 anos

## 🔧 Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)

## 📁 Estrutura do Projeto

```
petrobras/
├── index.html                  # Página principal
├── css/
│   └── style_veiculo.css      # Estilos da aplicação
├── js/
│   ├── script_veiculo.js      # Lógica do DOM e eventos
│   └── script_calculo.js      # Funções de cálculo de custos
└── README.md                   # Este arquivo
```

##  Taxas de IPVA por Combustível

| Combustível | Taxa |
|---|---|
| Gasolina | 20% |
| Etanol | 15% |
| Bicombustível | 10% |
| Híbrido | 8% |
| Elétrico | 2% |

## 💻 Como Usar

1. Abra `index.html` no navegador
2. Preencha o formulário com os dados do veículo
3. Selecione o tipo de combustível
4. Clique em "Adicionar Veículo"
5. O veículo será exibido na lista com os cálculos automáticos
6. Use "Limpar lista" para apagar todos os veículos da listagem

## 📝 Observações

- O formulário é resetado automaticamente após cada cadastro
- A listagem é atualizada dinamicamente sem recarregar a página
- Veículos com mais de 20 anos aparecem como "Isento" no campo de IPVA

Atividade feita por: Guilherme Lima Santos.
