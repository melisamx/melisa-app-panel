Ext.define('Melisa.panel.view.phone.menu.Modal', {
    extend: 'Ext.Container',
    alias: 'widget.apppanelmenumodal',
    
    requires: [
        'Melisa.panel.view.phone.menu.Avatars',
        'Melisa.panel.view.phone.menu.Options'
    ],
    
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 9999,
    width: '80%',
    hideOnMaskTap: true,
    hideAnimation: 'slideOut',
    modal: false,
    cls: 'core-modal',
    scrollable: 'vertical',
    showAnimation: {
        type: 'slide',
        direction: 'right'
    },
    items: [
        {
            xtype: 'apppanelavatars',
            height: '30%',
            minHeight: 220
        },
        {
            xtype: 'apppaneloptions',
            height: '70%'
        }
    ]
    
});