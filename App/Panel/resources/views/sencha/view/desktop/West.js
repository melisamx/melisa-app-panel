Ext.define('Melisa.panel.view.desktop.West', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'Melisa.panel.view.TreeOptions'
    ],
    
    alias: 'widget.apppanelwest',
    reference: 'panWest',
    region: 'west',
    cls: 'west',
    layout: 'border',
    items: [
        {
            xtype: 'apppaneltreeoptions',
            region: 'center',
            reference: 'treOptions',
            height: '100%',
            style: 'overflow: auto',
            bind: {
                store: '{menuMain}'
            }
        }
    ]
});
