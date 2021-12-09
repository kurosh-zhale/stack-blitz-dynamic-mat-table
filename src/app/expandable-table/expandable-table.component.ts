import { Component, OnInit } from '@angular/core';
import { TableField, TablePagination, TableSetting } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import { data } from './expandable-table-model';
import {
  paginationConfig,
  tableColumnsConfig,
  tableSettingsConfig,
} from './expandable-table.config';
import { ExpandedTableComponent } from './expanded-table/expanded-table.component';

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.scss'],
})
export class ExpandableTableComponent implements OnInit {
  columns!: TableField<any>[];

  setting!: TableSetting;

  expandComponent = ExpandedTableComponent;

  pagination!: TablePagination;

  dataSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.initTable(tableColumnsConfig, tableSettingsConfig, paginationConfig);

    this.setData(data);

    // this.expandComponent = ExpandedTableComponent;
  }

  initTable(
    tableColumnsConfig: TableField<any>[],
    tableSettingsConfig: TableSetting,
    pageinationConfig: TablePagination
  ): void {
    this.columns = tableColumnsConfig;
    this.setting = tableSettingsConfig;
    this.pagination = pageinationConfig;
  }

  setData(data: any[]): void {
    let injectedData: any[] = data.map((i) => {
      return {
        ...i,
        option: {
          expandCallback: null,
        },
      };
    });

    this.dataSource.next(injectedData);
  }
}
