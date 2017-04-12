Ext.define('Melisa.panel.view.desktop.dashboard.Wrapper', {
    extend: 'Ext.container.Viewport',
    
    requires: [
        'Melisa.panel.view.desktop.dashboard.WrapperController',
        'Melisa.panel.view.desktop.dashboard.Center',
        'Melisa.panel.view.desktop.dashboard.North',
        'Melisa.view.universal.dashboard.WrapperModel',
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
            xtype: 'apppanelcenter',
            region: 'center',
            reference: 'panelcenter'
        },
        {
            xtype: 'apppanelnorth',
            region: 'north',
            reference: 'panelnorth'
        }
    ]
    
});
