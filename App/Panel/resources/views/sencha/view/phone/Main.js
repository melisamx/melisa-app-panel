Ext.define('Melisa.panel.view.phone.Main', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.panel.view.phone.main.Header',
        'Melisa.panel.view.phone.main.Body',
        'Melisa.panel.view.phone.MainController'
    ],
    
    alias: 'widget.apppanelmain',
    controller: 'apppanelmain',
    layout: 'card',
    items: [
        {
            xtype: 'apppanelheader'
        },
        {
            xtype: 'apppanelbody'
        }
    ]
    
});
