const btnEnviaAdiantamento = document.getElementById('envia_dados')
btnEnviaAdiantamento.addEventListener('click' , () =>{

    enviaAdiantamento()
})

var adiantamento = {
    "AutheticationToken": {
    "Username": "INT.DEV",
    "Password": "MXM",
    "EnvironmentName": "TESTE_MOBILE"
    },
    "Data": {
    "InterfacedaAntecipacao": [
    {
    "SequenciadoRegistro": 1,
    "Identificacao": "CP",
    "CodigodoClienteouFornecedor": "88477283812",
    "DocumentodeAntecipacao": "127472183",
    "CodigodoPortador": "98431",
    "IndicadordeEstorno": "S",
    "CodigodaFormadePagamento": "123",
    "CodigodaContadePagamentoaoFornecedor": "231",
    "CodigodoRementente": "E",
    "Nominal": "Jose da Silva",
    "CodigodaEmpresa": "120",
    "CodigodaFilial": "2341",
    "DatadoLancamento": "04062019",
    "CodigodaMoeda": "R",
    "CodigodaSegundaMoeda": "D",
    "ValordoLancamento": "3002,43",
    "ValordoLancamentoemSegundaMoeda": "",
    "ValordaCotacao": "",
    "Historico": "Antecipação de pagamento.",
    "ContabilizacaoInformada": "0",
    "DatadeCompetencia": "01062019",
    "InterfaceGrupoAntecipacao": [],
    "InterfaceRelDevolucaoAntecipacao": []
    }
    ]
    }
    }

const enviaAdiantamento = async () =>  {
    
    let init = {
        method: 'POST',
        mode:'no-cors',
        headers:{
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(adiantamento)
    }
    try{
        const response = await fetch('https://arquitetura.mxm.com.br/teste_mobile/api/InterfacedaAntecipacao/Gravar' , init)
    const dados = await response.json()
    console.log(dados)

    return dados}
    catch(error){
        return error
    }
        
    
    
    }

    