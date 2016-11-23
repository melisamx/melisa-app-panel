Ext.define('Melisa.panel.view.desktop.Main', {
    extend: 'Ext.container.Viewport',
    
    requires: [
        'Melisa.panel.view.desktop.MainController',
        'Melisa.panel.view.TreeOptions',
        'Melisa.panel.view.desktop.West',
        'Melisa.panel.view.desktop.Center',
        'Melisa.panel.view.desktop.North'
    ],
    
    controller: 'apppanelmain',
    border: false,
    layout: 'border',
    cls: 'app',
    items: [
        {
            xtype: 'apppanelwest'
        },
        {
            xtype: 'apppanelcenter'
        },
        {
            xtype: 'apppanelnorth'
        }
    ]
    
});
