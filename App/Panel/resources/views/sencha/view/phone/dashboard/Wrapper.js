Ext.define('Melisa.panel.view.phone.dashboard.Wrapper', {
    extend: 'Ext.Container',
    alias: 'widget.apppanelmain',
    
    requires: [
        'Melisa.core.Module',
        'Melisa.panel.view.phone.dashboard.Header',
        'Melisa.panel.view.phone.dashboard.Body',
        'Melisa.panel.view.phone.dashboard.WrapperController',
        'Melisa.view.universal.dashboard.WrapperModel'
    ],
    
    mixins: [
        'Melisa.core.Module'
    ],
    
    controller: 'apppanelmain',
    hideAnimation: 'fadeOut',
    layout: 'fit',
    viewModel: {
        type: 'appmainmodel'
    },
    items: [
        {
            xtype: 'apppanelheader',
            bind: {
                hidden: '{conApplicationsList.hidden}'
            }
        },
        {
            xtype: 'apppanelbody',
            reference: 'conApplicationsList'
        }
    ]
    
});
