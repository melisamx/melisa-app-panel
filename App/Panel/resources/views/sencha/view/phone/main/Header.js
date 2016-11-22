
Ext.define('Melisa.panel.view.phone.main.Header', {
    extend: 'Ext.TitleBar',
    
    alias: 'widget.apppanelheader',
    docked: 'top',
    cls: 'core-header',
    title: '<img src="/assets/images/powerby.png" height="25" />',    
    items: [
        {
            xtype: 'button',
            iconCls: 'fa fa-bars',
            listeners: {
                tap: 'onTapBtnTitle'
            }
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-bell',
            align: 'right'
        },
        {
            xtype: 'button',
            iconCls: 'fa fa-comment',
            align: 'right'
        }
    ]
});
