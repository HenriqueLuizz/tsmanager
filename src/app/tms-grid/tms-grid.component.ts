import { Component, OnInit, Input } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfGridColumn } from '@totvs/thf-ui/components/thf-grid';

@Component({
  selector: 'app-tms-grid',
  templateUrl: './tms-grid.component.html',
  styleUrls: ['./tms-grid.component.css']
})
export class TmsGridComponent implements OnInit {

  selectedItem: string;
  message: string;
  
  allowedValues: Array<any> = ['save', 'editable','add'];
  allowedOptions: Array<ThfCheckboxGroupOption> = this.getAllowedOptions();

  removeStatusValues: Array<any> = [];
  removeStatusOptions = this.getRemoveStatusOptions();

  visualizationsValues: Array<any> = ['selectable','remove'];
  visualizationsOptions = this.getVisualizationsOptions();

  dataItems: Array<Object> = this.getDataItems();
  columns: Array<ThfGridColumn> = this.getColumns();


  constructor() { 
    
  }

  ngOnInit() {
  }


onSelectionChange(event) {
  this.selectedItem = event.data ? event.data.ProductName : '' ;
}

onRemove(event) {
  const data = event.data;

  const statusName = data.Status ? data.Status.StatusName : '';
  const allowedRemove = this.removeStatusValues.includes(statusName) || statusName === '';

  this.message = allowedRemove ? '' : `Itens com status de ${statusName} não podem ser removidos`;

  return allowedRemove;
}

onSave(event) {
  return this.allowedValues.includes('save');
}

loadMoreData() {
  const itemId = this.dataItems.length + 1;

  this.dataItems.push({
    ServiceID: itemId,
    ServiceName: `service${itemId}`,
    ServiceIP: 'localhost',
    ServiceType: 'DB',
    Status: 3
  });
}

private getAllowedOptions(): Array<ThfCheckboxGroupOption> {
  return [
    {
      value: 'add',
      label: 'Permite adicionar novos itens'
    },
    {
      value: 'editable',
      label: 'Permite edição',
    },
    {
      value: 'save',
      label: 'Permite salvar os itens',
    },
    {
      value: 'groupable',
      label: 'Permite agrupamento',
    }
  ];
}

private getRemoveStatusOptions(): Array<ThfCheckboxGroupOption> {
  return [
    {
      value: 'Pendente',
      label: 'Pendente'
    },
    {
      value: 'OK',
      label: 'OK'
    },
    {
      value: 'Requisitado',
      label: 'Requisitado',
    }
  ];
}

private getVisualizationsOptions() {
  return [
    {
      value: 'remove',
      label: 'Exibir botão de remover'
    },
    {
      value: 'export',
      label: 'Exibir ações de exportação'
    },
    {
      value: 'selectable',
      label: 'Exibir seleção de linhas'
    }
  ];
}

private getColumns(): Array<ThfGridColumn> {
  return [
    { column: 'ServiceID', label: 'Código', width: 80 },
    { column: 'ServiceName', label: 'Nome', width: 180, required: true, editable: true },
    { column: 'ServiceIP', label: 'Local', width: 180, required: true, editable: true },
    { column: 'ServiceType', label: 'Typo', width: 180, required: true, editable: true },
    { column: 'Status', label: 'Status', width: 80 },
  ];
}

private getDataItems(): Array<Object> {
  return [{
    ServiceID: 1,
    ServiceName: 'mongodb',
    ServiceIP: 'localhost',
    ServiceType: 'DB',
    Status: 'Pendente'
  }, {
    ServiceID: 2,
    ServiceName: 'appserver',
    ServiceIP: 'localhost',
    ServiceType: 'Aplicação',
    Status: 'Pendente'
  }, {
    ServiceID: 3,
    ServiceName: 'licenseserver',
    ServiceIP: 'localhost',
    ServiceType: 'Licença',
    Status: 'Pendente'
  }];
}


}
