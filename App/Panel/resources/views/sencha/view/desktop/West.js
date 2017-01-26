Ext.define('Melisa.panel.view.desktop.West', {
    extend: 'Ext.panel.Panel',
    
    requires: [
        'Melisa.panel.view.TreeOptions'
    ],
    
    alias: 'widget.apppanelwest',
    reference: 'panWest',
    region: 'west',
    width: 350,
    cls: 'west',
//    minWidth: 350,
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
