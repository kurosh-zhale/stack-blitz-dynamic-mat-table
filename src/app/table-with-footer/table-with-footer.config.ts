import { TableField, TablePagination, TableSetting } from 'dynamic-mat-table';

export const tableColumnsConfig: TableField<any>[] = [
  {
    name: 'name',
    type: 'text',
    cellStyle: {
      'background-color': '#E86A92',
      color: '#ffffff',
    },
    rowSelectionable: true,
    footer:[
      {
        aggregateText:'last name:',
        aggregateIcon:'account_circle',
        aggregateIconColor:'#00ff00',
        footerStyle:{
          "background-color":"aaffbb",
          "color":"fafafa",
        },
        printable:false
      },
      {
        aggregateText:'middle name: ',
        aggregateIcon:'gamepad',
        aggregateIconColor:'#00ffbc',
        footerStyle:{
          "background-color":"abcdef",
          "color":"fafafa",
        },
        printable:true
      }
    ]
  },
  {
    name: 'phone',
    type: 'number',
    footer:[
      {
        aggregateText:'work phone: ',
        aggregateIcon:'settings_phone',
        aggregateIconColor:'#00ff00',
        footerStyle:{
          "background-color":"aaffbb",
          "color":"fafafa",
        },
        printable:false
      },
      {
        aggregateText:'house phone: ',
        aggregateIcon:'contact_phone',
        aggregateIconColor:'#aaffbb',
        footerStyle:{
          "background-color":"abcdef",
          "color":"fafafa",
        },
        printable:true
      }
    ]
  },
  {
    name: 'email',
    type: 'text',
  },
  {
    name: 'postalZip',
    type: 'number',
  },
];

export const tableSettingConfig: TableSetting = {
  rowStyle: {
    'background-color': '#C1DBE3',
    color: '#ffffff',
  },
  alternativeRowStyle: {
    'background-color': '#2B2D42',
    color: '#ffffff',
  },
  direction: 'ltr',
  visibaleActionMenu: {
    json: true,
    print: true,
    columnSettingFilter: true,
    columnSettingPin: true,
    clearFilter: true,
  },
  visibleTableMenu: true,
};

export const paginationConfig: TablePagination = {
  length: 0,
  pageIndex: 0,
  pageSize: 10,
  pageSizeOptions: [5, 10, 15, 20],
  showFirstLastButtons: true,
};
