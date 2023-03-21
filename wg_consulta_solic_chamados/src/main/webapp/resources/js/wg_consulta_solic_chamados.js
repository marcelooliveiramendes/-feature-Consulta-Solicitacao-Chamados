var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

$(document).ready(function() {
    criaTabela()
})

$(document).ready(function() {
    var datasetFilter = DatasetFactory.getDataset("colleague", null, null, null);
    var datasetEmpresa = DatasetFactory.getDataset("dts_consultaEmpresas_MFX", null, null, null);
    var datasetDepartamento = DatasetFactory.getDataset("dts_consultaDepartamentos_MFX", null, null, null);
    var datasetCategorias = DatasetFactory.getDataset("dts_consultaCategorias_MFX", null, null, null);
    var datasetServicos = DatasetFactory.getDataset("dts_consultaServicos_MFX", null, null, null);
 
    usuarios = {
        source: datasetFilter.values,
        displayKey: 'colleagueName',
        multiSelect: false,
        table: {
            header: [
                {
                'title': 'Usuário',
                'size': 'col-xs-9',
                'dataorder': 'colleagueName',
                'standard': true
                }
            ],
            renderContent: ['colleagueName']
        }
    }
    empresas = {
        source: datasetEmpresa.values,
        displayKey: 'empresasFIlter',
        multiSelect: false,
        table: {
            header: [
                {
                'title': 'Empresa',
                'size': 'col-xs-9',
                'dataorder': 'txt_empresa_nomeUnidade',
                'standard': true
                }
            ],
            renderContent: ['txt_empresa_nomeUnidade']
        }
    }
    departamentos = {
        source: datasetDepartamento.values,
        displayKey: 'departamentosFIlter',
        multiSelect: false,
        table: {
            header: [
                {
                'title': 'Departamento',
                'size': 'col-xs-9',
                'dataorder': 'txt_departamento_nome',
                'standard': true
                }
            ],
            renderContent: ['txt_departamento_nome']
        }
    }
    categorias = {
        source: datasetCategorias.values,
        displayKey: 'categoriasFIlter',
        multiSelect: false,
        table: {
            header: [
                {
                'title': 'Categorias',
                'size': 'col-xs-9',
                'dataorder': 'txt_categoria_nome',
                'standard': true
                }
            ],
            renderContent: ['txt_categoria_nome']
        }
    }
    servicos = {
        source: datasetServicos.values,
        displayKey: 'servicosFIlter',
        multiSelect: false,
        table: {
            header: [
                {
                'title': 'Servicos',
                'size': 'col-xs-9',
                'dataorder': 'txt_servico_nome',
                'standard': true
                }
            ],
            renderContent: ['txt_servico_nome']
        }
    }

    var filter = FLUIGC.filter('#txt_solicitante', usuarios); 
    var filter = FLUIGC.filter('#txt_empresa', empresas); 
    var filter = FLUIGC.filter('#txt_departamento', departamentos); 
    var filter = FLUIGC.filter('#txt_categoria', categorias); 
    var filter = FLUIGC.filter('#txt_servico', servicos); 
    var filter = FLUIGC.filter('#txt_status', usuarios); 

    
    
    let datasetStatus = DatasetFactory.getDataset("dts_consultaStatusChamado_MFX", null, null, null);
    
    let concluido = 0, pendenciaExecucao = 0, pendenciaSolicitante = 0, pronto = 0, aguardandoCompras = 0, aguardandoTerceiro = 1;

    for(let i = 0; i < datasetStatus.values.length; i++) {
        let status = datasetStatus.values[i];

        // Aguardando Solicitante
        // Em revisão
        // Em Aprovação
        // Aguardando Classificação
        // Aguardando Validação
        // Aguardando Avaliação
        // Aguardando Compras
        // Aguardando Terceiro
        // Pronto
        // Concluido
        
        switch(status.sl_servico_status){
            case "pendencia de execucao": 
                pendenciaExecucao += 1;
                break;
            case "Pronto":
                pronto += 1
                break;
            case "Concluido":
                concluido += 1;
                break;
            case "AguardandoCompras":
                aguardandoCompras += 1;
                break;
            case "AguardandoTerceiro":
                aguardandoTerceiro += 1;
                break;
            case "AguardandoSolicitante":
                pendenciaSolicitante += 1;
                break;
        }
        
    }
    
    var data = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ]
    
    var chart = FLUIGC.chart('#status_grafico', {
        id: 'status_grafico_id',
        width: '200',
        height: '200',
        /* See the list of options */
    });
    // call the doughnut function
    var doughnutChart = chart.doughnut(data);
    
    
    
    
    
    mudaDataGrafico()
})
$(document).ready(function() {
    

    let baixa = 0, media = 0, alta = 0, total = 0;

    let datasetPrioridades = DatasetFactory.getDataset("dts_consultaPrioridadeChamados_MFX", null, null, null);

    for(let i = 0; i < datasetPrioridades.values.length; i++){
        let prioridade = datasetPrioridades.values[i].sl_servico_prioridade;

        switch(prioridade){
            case "B":
                baixa += 1;
                break;
            case "M":
                media += 1;
                break;
            case "A":
                alta += 1;
                break;
        }
    }

    total = baixa + media + alta;
    let mediaBaixa = (baixa / total) * 100;
    let mediaMedia = (media / total) * 100;
    let mediaAlta = (alta / total) * 100;

    $("#progressBarBaixa").css("width", mediaBaixa + "%");
    $("#progressBarMedia").css("width", mediaMedia + "%");
    $("#progressBarAlta").css("width", mediaAlta + "%");
    $("#progressBarBaixa span").text(mediaBaixa.toFixed(1) + "%");
    $("#progressBarMedia span").text(mediaMedia.toFixed(1) + "%");
    $("#progressBarAlta span").text(mediaAlta.toFixed(1) + "%");
    $("#totalOcorrencias").text(total)


})
$(document).ready(function() {
    let mesAtual = new Date().getMonth() + 1;
    const mesesDoAno = [
        'Dezembro',
        'Novembro',
        'Outubro',
        'Setembro',
        'Agosto',
        'Julho',
        'Junho',
        'Maio',
        'Abril',
        'Março',
        'Fevereiro',
        'Janeiro'
    ];

    let mesesRender = mesesDoAno.length - mesAtual

    let count = mesesDoAno.length
    for(let i = 0; i < mesesDoAno.length; i++){
        if(i >= mesesRender){
            conteudo = `
                <option value="${count}">${mesesDoAno[i]}</option>
            `
            $("#periodoGrafico").append(conteudo)
        }
        count = count - 1;
    }

    mudaDataGrafico()

})


function mudaDataGrafico(){
    

    $("#periodoGrafico option").each(function(){
        console.log($(this).val());
    })

    let z = new Date().getMonth() + 1;

    let mes = parseInt($("#periodoGrafico").val());

    let dataAtual = new Date(2023, mes, 0).getDate();

    diasDoMes = []

    for (let i = 1; i <= dataAtual; i++) {
        diasDoMes.push(new Date(2023, 0, i).getDate());
    }

    console.log(diasDoMes);


    var dataBars = {
        labels: diasDoMes,
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: diasDoMes
            }
        ]
    };

    var chart = FLUIGC.chart('#quant_dia_grafico', {
        id: 'quant_dia_grafico_id',
        width: '500',
        height: '200',
        /* See the list of options */
    });
    // call the bar function
    var barChart = chart.bar(dataBars);

}

function criaTabela(){
    let dataset = DatasetFactory.getDataset("dts_consultaSolicitacoesChamados_MFX", null, null, null);

    for(let i = 0; i < dataset.values.length; i++){
        let solicitacao_id  = dataset.values[i].num_solicitacao;
        let empresa = dataset.values[i].ztxt_servico_empresa;
        let departamento = dataset.values[i].ztxt_servico_departamento;
        let solicitante = dataset.values[i].txt_solicitacao_solicitante;
        let categoria = dataset.values[i].hd_servico_codCategoria;
        let abertura = dataset.values[i].txt_solicitacao_data;
        let responsavel = dataset.values[i].hd_solicitacao_codexecutor;
        let status = dataset.values[i].sl_servico_status;
        let sla = 'fora';
        let tempo = dataset.values[i].hd_servico_tempoSLA;
    
        let conteudo = `
            <tr>
                <td><span>${solicitacao_id}</span></td>
                <td><span>${empresa}</span></td>
                <td><span>${departamento}</span></td>
                <td>
                    <div style="display: flex; align-items:center;">
                        <div style="width: 30px; height: 30px; border-radius: 100%; background-color: #5e5e5e; margin-right: 10px;"></div>
                        <span>${solicitante}</span>
                    </div>
                </td>
                <td><span>${categoria}</span></td>
                <td><span>${abertura}</span></td>
                <td>
                    <div style="display: flex; align-items:center;">
                        <div style="width: 30px; height: 30px; border-radius: 100%; background-color: #5e5e5e; margin-right: 10px;"></div>
                        <span>${responsavel}</span>
                    </div>
                </td>
                <td><span>${status}</span></td>
                <td><span>${sla}</span></td>
                <td>
                    <div>
                        <span>${tempo}</span>
                    </div>
                </td>

            </tr>
        `

        $('#tabelaSolicitacoes').append(conteudo)
    }

}