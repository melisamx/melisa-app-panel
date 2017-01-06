Ext.define('Melisa.panel.view.phone.dashboard.Wrapper', {
    extend: 'Ext.Container',
    alias: 'widget.apppanelmain',
    
    requires: [
        'Melisa.core.Module',
        'Melisa.panel.view.phone.dashboard.Header',
        'Melisa.panel.view.phone.dashboard.Body',
        'Melisa.panel.view.phone.dashboard.WrapperController',
        'Melisa.panel.view.universal.MainModel'
    ],
    
    mixins: [
        'Melisa.core.Module'
    ],
    
    controller: 'apppanelmain',
    layout: 'card',
    viewModel: {
        type: 'appmainmodel'
    },
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
