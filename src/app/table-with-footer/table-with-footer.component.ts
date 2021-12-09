import { Component, OnInit } from '@angular/core';
import { TableField, TablePagination, TableSetting } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { paginationConfig, tableColumnsConfig, tableSettingConfig } from './table-with-footer.config';
import { data } from './table-with-footer.model';

@Component({
  selector: 'app-table-with-footer',
  templateUrl: './table-with-footer.component.html',
  styleUrls: ['./table-with-footer.component.scss'],
})
export class TableWithFooterComponent implements OnInit {
  columns!: TableField<any>[];

  setting!: TableSetting;

  dataSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  pagination!: TablePagination;

  constructor() {}

  ngOnInit(): void {
    this.initTable(
      tableColumnsConfig,
      tableSettingConfig,
      paginationConfig
    );

    this.dataSource.next(data);
  }

  initTable(
    tableColumnsConfig: TableField<any>[],
    tableSettingsConfig: TableSetting,
    paginationConfig: TablePagination
  ): void {
    this.columns = tableColumnsConfig;
    this.setting = tableSettingsConfig;
    this.pagination = paginationConfig;
  }
}
