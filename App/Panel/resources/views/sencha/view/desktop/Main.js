Ext.define('Melisa.panel.view.desktop.Main', {
    extend: 'Ext.container.Viewport',
    
    requires: [
        'Melisa.panel.view.desktop.MainController',
        'Melisa.panel.view.TreeOptions'
    ],
    
    controller: 'apppanelmain',
    border: false,
    layout: 'border',
    cls: 'app',
    items: [
        {
            region: 'west',
            width: 350,
            cls: 'west',
            minWidth: 350,
            layout: 'fit',
            items: [
                {
                    xtype: 'apppaneltreeoptions'
                }
            ]
        },
        {
            region: 'center',
            cls: 'center',
            layout: 'fit',
            items: [
                {
                    xtype: 'tabpanel'
                }
            ]
        },
        {
            region: 'north',
            cls: 'top',
            height: 80,
            layout: 'border',
            items: [
                {
                    xtype: 'toolbar',
                    region: 'west',
                    cls: 'top-west',
                    width: 350,
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-bars',
                            scale: 'large',
                            width: '100%',
                            cls: 'btnMain',
                            text: 'Panel'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    region: 'center',
                    items: [
                        {
                            text: 'Status'
                        },
                        '->',
                        {
                            text: 'Luis Heredia'
                        }
                    ]
                }
            ]
        }
    ]
    
});
