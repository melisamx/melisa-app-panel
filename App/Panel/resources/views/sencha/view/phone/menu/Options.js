
Ext.define('Melisa.panel.view.phone.menu.Options', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.panel.view.TreeOptions'
    ],
    
    alias: 'widget.apppaneloptions',
    layout: 'fit',
    scrollable: true,    
    items: [
        {
            xtype: 'apppaneltreeoptions',
            userCls: 'core-menu',
            scrollable: true,
            height: '100%'
        }
    ]
    
});
