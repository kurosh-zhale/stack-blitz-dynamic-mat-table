import { AbstractField, TableField, TablePagination, TableSetting, VisibleActionMenu } from 'dynamic-mat-table';

export const tableColumnsConfig: TableField<any>[] = [
  {
    name: 'row',
    type: 'number',
    cellStyle: { 'background-color': '#3f51b5', color: '#ffffff' },
  },
  {
    name: 'order',
    header: 'Row Order',
    sticky: 'start',
    option: 1,
    clickable: false,
    rowSelectionable: false,
  },
  {
    name: 'name',
    header: 'Element Name',
    sticky: 'start',
  },
  { name: 'weight' },
  { name: 'color' },
  { name: 'brand' },
  {
    name: 'setting',
    icon: 'chrome_reader_mode',
    iconColor: 'blue',
    option: 2,
    clickable: false,
    rowSelectionable: false,
  },
];

const columnSetting:AbstractField[] = [];

const actionMenu:VisibleActionMenu = {
  json:true,
  csv:true,
  print:true,
  columnSettingPin:true,
  columnSettingFilter:true,
  clearFilter:true,
}

export const tableSettingsConfig:TableSetting = {
  direction:"ltr",
  columnSetting:columnSetting,
  visibaleActionMenu:actionMenu,
  rowStyle:{
    "background-color":"#70e181",
    "color":"ffffff"
  },
  alternativeRowStyle:{
    "background-color":"afafaf",
    "color":"55fab3"
  },
  autoHeight:true,
}

export const paginationConfig:TablePagination = {
  length:0,
  pageIndex:0,
  pageSize:10,
  pageSizeOptions:[5,10,15,20],
  showFirstLastButtons:true
}
