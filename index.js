const btnGrupoPatrimonial = document.getElementById('envia_dados')
let codigo = document.getElementById('codigo')
let descricao = document.querySelector('#descricao')
let fixa_variavel = document.querySelector('input[name="gridRadios"]:checked')
let percent_depre_cont = document.querySelector('#percent_depre_cont')
let percent_depre_anual = document.querySelector('#percent_depre_anual')
let percent_depre_fiscal = document.querySelector('#percent_depre_fiscal')
let percent_depre_residual = document.querySelector('#percent_depre_residual')
let vida_util_mes = document.querySelector('#vida_util_mes')
let proporcional = document.querySelector('#proporcional')
let inativo = document.querySelector('#inativo')






btnGrupoPatrimonial.addEventListener('click' , event =>{
    enviaGrupoPatrimonial()
    event.preventDefault()
})





var patrimonio = {
            "AutheticationToken": {
            "Username": "INT.DEV",
            "Password": "MXM",
            "EnvironmentName": "TESTE_MOBILE"
            },
            "Data": {
            "InterfaceArquivoGrupoPatrimonial": [
            {
            "CodigoGrupoPatrimonial": "01",
            "DescricaoGrupoPatrimonial": "GRUPO G1",
            "Taxa": "F",
            "PercentualDepreciacao01": "1",
            "PercentualDepreciacao02": "2",
            "PercentualDepreciacaoFiscal": "3",
            "PercentualMaximoDepreciacaoResidual": "4",
            "Proporcional": "N",
            "TaxaDepreciacaoVariavel": "4",
            "Inativo": "S",
            "CodigoResponsavel": "GERAL"
            }
            ]
            }
            }
        


const enviaGrupoPatrimonial = async () =>  {
    
    let init = {
        method: 'POST',
        mode:'no-cors',
        headers:{
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(patrimonio)
    }
    try{
        const response = await fetch('https://arquitetura.mxm.com.br/teste_mobile/api/InterfacedoGrupoPatrimonial/Gravar' , init)
    const dados = await response.json()
    console.log(dados)

    return dados}
    catch(error){
        return error
    }
    
    }

