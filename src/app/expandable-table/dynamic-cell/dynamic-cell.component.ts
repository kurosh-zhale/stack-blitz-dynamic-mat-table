import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import { IRowEvent, TableField, DynamicMatTableComponent, IDynamicCell } from 'dynamic-mat-table';

@Component({
  selector: 'app-dynamic-cell',
  templateUrl: './dynamic-cell.component.html',
  styleUrls: ['./dynamic-cell.component.scss']
})
export class DynamicCellComponent implements OnInit, IDynamicCell {
  @Input() row!: any;
  @Input() column!: TableField<any>;
  @Input() parent!: DynamicMatTableComponent<any>;

  constructor() { }

  ngOnInit(): void {
  }

  
  expandRow_onClick() {
    // this.row.option.expand = !this.row.option.expand;
    if (!this.row.option) {
      this.row.option = {expand: false};
    } else if (!this.row.option.expand) {
      this.row.option.expand = false;
    }
    this.parent.expandRow(this.row.id, !this.row.option.expand);    
    if (typeof this.row.option.expandCallback == 'function') {
      this.row.option.expandCallback(this.row);
    }
  }

}
