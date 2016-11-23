
Ext.define('Melisa.panel.view.desktop.North', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.apppanelnorth',
    region: 'north',
    cls: 'north',
    height: 80,
    layout: 'border',
    items: [
        {
            xtype: 'toolbar',
            region: 'west',
            cls: 'north-west',
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
});
