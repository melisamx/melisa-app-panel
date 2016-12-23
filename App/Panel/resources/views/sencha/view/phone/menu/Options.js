Ext.define('Melisa.panel.view.phone.menu.Options', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.panel.view.TreeOptions'
    ],
    
    alias: 'widget.apppaneloptions',
    items: [
        {
            xtype: 'apppaneltreeoptions',
            userCls: 'core-menu',
            height: '100%',
            bind: {
                store: '{menuMain}'
            }
        }
    ]
    
});
