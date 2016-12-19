Ext.define('Melisa.panel.view.phone.dashboard.Header', {
    extend: 'Ext.TitleBar',
    
    alias: 'widget.apppanelheader',
    docked: 'top',
    cls: 'core-header',
    title: '<img src="/assets/images/powerby.png" height="25" />',
    titleAlign: 'center',
    items: [
        {
            xtype: 'button',
            iconCls: 'x-fa fa fa-bars',
            listeners: {
                tap: 'onTapBtnTitle'
            }
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa fa-search',
            align: 'right'
        }
    ]
});
