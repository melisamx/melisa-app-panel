Ext.define('Melisa.panel.view.desktop.Main', {
    extend: 'Ext.container.Viewport',
    
    requires: [
        'Melisa.panel.view.desktop.MainController',
        'Melisa.panel.view.desktop.West',
        'Melisa.panel.view.desktop.Center',
        'Melisa.panel.view.desktop.North',
        'Melisa.panel.view.universal.MainModel',
        'Melisa.override.core.ModuleTabs'
    ],
    
    controller: 'apppanelmain',
    layout: 'border',
    cls: 'app',
    border: false,
    viewModel: {
        type: 'appmainmodel'
    },    
    items: [
        {
            xtype: 'apppanelwest',
            split: true,
            width: 242
        },
        {
            xtype: 'apppanelcenter'
        },
        {
            xtype: 'apppanelnorth'
        }
    ]
    
});
