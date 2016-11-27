Ext.define('Melisa.panel.view.desktop.West', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'Melisa.panel.view.TreeOptions'
    ],
    
    alias: 'widget.apppanelwest',
    reference: 'panelwest',
    region: 'west',
    width: 350,
    cls: 'west',
    minWidth: 350,
    layout: 'border',
    items: [
        {
            xtype: 'apppaneltreeoptions',
            region: 'center',
            bind: {
                store: '{menuMain}'
            }
        },
        {
            xtype: 'container',
            region: 'south',
            height: 100,
            bind: {
                html: '{appName}'
            }
        }
    ]
});
