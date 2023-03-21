<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
    <div class="container-fluid">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="buscaSolicitacao">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="txt_solicitante">Solicitante</label>
                                <input type="text" name="txt_solicitante" id="txt_solicitante" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="txt_empresa">Empresa</label>
                                <input type="text" name="txt_empresa" id="txt_empresa" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-1">
                            <label>Periodo</label>
                            <div style="display: flex;">
                                <select name="periodoInicio" id="periodoInicio" class="form-control">
                                    <option value="de">De</option>
                                </select>
                                <select name="periodoFim" id="periodoFim" class="form-control">
                                    <option value="ate">Até</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="txt_departamento">Depart.</label>
                                <input type="text" name="txt_departamento" id="txt_departamento" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="txt_categoria">Categoria</label>
                                <input type="text" name="txt_categoria" id="txt_categoria" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group">
                                <label for="txt_servico">Serviço</label>
                                <input type="text" name="txt_servico" id="txt_servico" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group">
                                <label for="txt_status">Status</label>
                                <input type="text" name="txt_status" id="txt_status" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="form-group">
                                <label for="txt_sla">SLA</label>
                                <input type="text" name="txt_sla" id="txt_sla" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12" style="display: flex; justify-content: center !important; align-items: center !important;">
                            <button class="search_btn_solic">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboardContent">
            <div class="coluna coluna1">
                <div class="panel panel-default"style="display: flex !important; width: 90% !important">
                    <div class="panel-body" style="display: flex !important; width: 100%; justify-content: column;">
                        <div class="total_ocorrencias_box" style="display: flex !important; width: 100%; flex-direction: column;">
                            <div style="display: flex; justify-content: space-between !important; align-items: center;">
                                <span id="totalOcorrencias">14</span>
                                <span> <i class="flaticon flaticon-check-circle icon-md" aria-hidden="true"></i></span>
                            </div>
                            <br>
                            <div class="row">
                                <label for="progress" style="font-size: 18px; color: #6b6b6b;">Total de ocorrencias</label>
                                <div class="progress">
                                    <div id="progressBarBaixa" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                        <span>35% </span>
                                    </div>
                                    <div id="progressBarMedia" class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                        <span>30% </span>
                                    </div>
                                    <div id="progressBarAlta" class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                        <span>35% </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="display: flex; justify-content: space-between;">
                                <div style="display: flex; justify-content: center; align-items: center;">
                                    <div style="width: 8px; height: 8px; background-color: #1ab83f; border-radius: 100%; margin-right: 10px;"></div>
                                    <span>Baixa</span>
                                </div>
                                <div style="display: flex; justify-content: center; align-items: center;">
                                    <div style="width: 8px; height: 8px; background-color: #e3b420; border-radius: 100%; margin-right: 10px;"></div>
                                    <span>Média</span>
                                </div>
                                <div style="display: flex; justify-content: center; align-items: center;">
                                    <div style="width: 8px; height: 8px; background-color: #cc3d3d; border-radius: 100%; margin-right: 10px;"></div>
                                    <span>Alta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default" style="display: flex !important; width: 90% !important">
                    <div class="panel-body" style="display: flex !important; width: 100% !important; justify-content: column;">
                        <div class="total_ocorrencias_box" style="display: flex !important; width: 100%; flex-direction: column;">
                            <div style="display: flex; justify-content: space-between !important;">
                                <span>14</span>
                                <span> <i class="flaticon flaticon-check-circle icon-md" aria-hidden="true"></i></span>
                            </div>
                            <br>
                            <div class="row">
                                <label for="progress" style="font-size: 18px; color: #6b6b6b;">Total de ocorrencias</label>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                        <span>35% </span>
                                    </div>
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                                        <span>30% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="coluna coluna2">
                <div class="panel panel-default" style="display: flex; flex-direction: column !important; justify-content: center !important; align-items: center !important; width: 90% !important">
                    <div class="panel-body" style="display: flex; align-items: center; width: 100%; height: 100%;">
                        <div id="status_grafico" style="margin-right: 20px;"></div>
                        <div class="tabelaStatus">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td><strong>Status</strong></td>
                                        <td><strong>Quant.</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Aguardando Solicitante</td>
                                        <td>51</td>
                                    </tr>
                                    <tr>
                                        <td>Em revisão</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>Em Aprovação</td>
                                        <td>43</td>
                                    </tr>
                                    <tr>
                                        <td>Aguardando Classificação</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>Aguardando Validação</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>Aguardando Avaliação</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>Aguardando Compras</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>Aguardando Terceiro</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>Pronto</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>Concluido</td>
                                        <td>55</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="coluna coluna3">
                <div class="panel panel-default" style="width: 100% !important">
                    <div class="panel-body" style="height: 100%; width: 100%;">
                        <div style="display: flex;">
                            <select name="periodoGrafico" id="periodoGrafico" style="width: 200px; margin-right: 20px" class="form-control" onchange="mudaDataGrafico()">
                
                            </select>
                            <div><p>- Quantidade por dia</p></div>
                        </div>
                        <br>
                        <div class="quant_dia_grafico_div">
                            <div id="quant_dia_grafico"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="panel panel-default">
            <div class="panel-body">
                <table class="table">
                    <thead>
                        <tr>
                            <td><strong>Solicitação</strong></td>
                            <td><strong>Empresa</strong></td>
                            <td><strong>Departamento</strong></td>
                            <td><strong>Solicitante</strong></td>
                            <td><strong>Categoria</strong></td>
                            <td><strong>Abertura</strong></td>
                            <td><strong>Responsável</strong></td>
                            <td><strong>Status</strong></td>
                            <td><strong>SLA</strong></td>
                            <td><strong>Tempo</strong></td>
                        </tr>
                    </thead>
                    <tbody id="tabelaSolicitacoes">
                        <tr>
                            <td><span>2201</span></td>
                            <td><span>GS Inima</span></td>
                            <td><span>Departamento 01</span></td>
                            <td>
                                <div style="display: flex; align-items:center;">
                                    <div style="width: 30px; height: 30px; border-radius: 100%; background-color: #5e5e5e; margin-right: 10px;"></div>
                                    <span>Davi Cedro</span>
                                </div>
                            </td>
                            <td><span>Categoria</span></td>
                            <td><span>10/10/2023 10:45</span></td>
                            <td>
                                <div style="display: flex; align-items:center;">
                                    <div style="width: 30px; height: 30px; border-radius: 100%; background-color: #5e5e5e; margin-right: 10px;"></div>
                                    <span>Davi Cedro</span>
                                </div>
                            </td>
                            <td><span>Em execução</span></td>
                            <td><span>Fora</span></td>
                            <td>
                                <div>
                                    <span>16 horas</span>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

