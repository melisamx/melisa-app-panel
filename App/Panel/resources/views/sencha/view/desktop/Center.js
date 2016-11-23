
Ext.define('Melisa.panel.view.desktop.Center', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.apppanelcenter',
    region: 'center',
    cls: 'center',
    layout: 'fit',
    items: [
        {
            xtype: 'tabpanel'
        }
    ]
});
