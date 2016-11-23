
Ext.define('Melisa.panel.view.desktop.West', {
    extend: 'Ext.panel.Panel',
    
    region: 'west',
    alias: 'widget.apppanelwest',
    width: 350,
    cls: 'west',
    minWidth: 350,
    layout: 'fit',
    items: [
        {
            xtype: 'apppaneltreeoptions'
        }
    ]
});
