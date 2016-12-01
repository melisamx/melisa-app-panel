
Ext.define('Melisa.panel.view.desktop.North', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.apppanelnorth',
    region: 'north',
    cls: 'north',
    height: 80,
    layout: 'border',
    reference: 'panelnorth',
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
                    bind: {
                        text: '{appName}'
                    }
                }
            ]
        },
        {
            xtype: 'toolbar',
            region: 'center',
            items: [
                {
                    xtype: 'button',
                    cls: 'button-close-module',
                    scale: 'large',
                    iconCls: 'x-fa fa fa-chevron-left',
                    bind: {
                        text: '{moduleActive.title}',
                        hidden: '{showclosemodule}'
                    },
                    listeners: {
                        click: 'onClickCloseModule'
                    }
                },
                '->',
                {
                    bind: {
                        text: '{identityName}'
                    }
                }
            ]
        }
    ]
});
