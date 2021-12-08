import { Component, OnInit } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import {
  TableField,
  TablePagination,
  TableSelectionMode,
  TableSetting,
} from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import {
  tableColumnsConfig,
  tableSettingConfig,
  paginationConfig,
} from './selectable-table.config';
import { data as tableData } from './selectable-table.model';

@Component({
  selector: 'app-selectable-table',
  templateUrl: './selectable-table.component.html',
  styleUrls: ['./selectable-table.component.scss'],
})
export class SelectableTableComponent implements OnInit {
  columns!: TableField<any>[];

  setting!: TableSetting;

  selectionMode: TableSelectionMode = 'none';

  datasource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  pagination!: TablePagination;

    constructor() {}

  ngOnInit(): void {
    this.initTable(tableColumnsConfig, tableSettingConfig, paginationConfig);

    this.datasource.next(tableData)
  }

  initTable(
    tableColumnConfig: TableField<any>[],
    tableSettingsConfig: TableSetting,
    tablePageinationConfig: TablePagination
  ): void {
    this.columns = tableColumnConfig;
    this.setting = tableSettingsConfig;
    this.pagination = tablePageinationConfig;
  }
  
}
