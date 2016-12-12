Ext.define('Melisa.panel.view.phone.Main', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.panel.view.phone.main.Header',
        'Melisa.panel.view.phone.main.Body',
        'Melisa.panel.view.phone.MainController',
        'Melisa.panel.view.MainModel'
    ],
    
    alias: 'widget.apppanelmain',
    controller: 'apppanelmain',
    viewModel: {
        type: 'appmainmodel'
    },
    layout: 'card',
    items: [
        {
            xtype: 'apppanelheader'
        },
        {
            xtype: 'apppanelbody',
            reference: 'apppanelbody'
        }
    ]
    
});
