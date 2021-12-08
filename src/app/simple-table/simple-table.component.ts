import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  TableRow,
  TableField,
  PrintConfig,
  TableSetting,
  TablePagination,
  DynamicMatTableComponent,
  TableVirtualScrollDataSource,
  TablePaginationMode,
} from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { 
  tableColumnsConfig,
  tableSettingsConfig,
  paginationConfig
} from './simple-table.config';
import { DATA } from './simple-table.model';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent implements OnInit {
  columns: TableField<any>[] = tableColumnsConfig;

  direction: 'ltr' | 'rtl' = 'ltr';

  showReloadData: boolean = true;

  rowHeight: number = 40;

  pending: boolean = false;

  setting: TableSetting = {};

  paginationMode: TablePaginationMode = 'client-side';

  showNoData: boolean = true;

  dataSource:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  pagination:TablePagination = {};

  stickyHeader:boolean = false;

  printConfig:PrintConfig = {};

  showProgress:boolean = true;

  constructor() {}

  ngOnInit(): void {
    // this.setting.columnSetting = this.columns = tableColumnsConfig
    // this.initTable(
    //   tableColumnsConfig,
    //   tableSettingsConfig,
    //   paginationConfig
    //   );
    this.setData();
  }

  initTable(
    columnsConfig: TableField<any>[],
    settingConfig: TableSetting,
    paginationConfig: TablePagination,
    ): void {
    this.columns = columnsConfig;
    this.setting = settingConfig;
    this.pagination = paginationConfig; 
  }

  setData() {
    let data = DATA
    this.dataSource.next(data);
    console.log(data);
    
  }
}
