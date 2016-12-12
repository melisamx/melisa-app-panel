
Ext.define('Melisa.panel.view.phone.menu.Modal', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.panel.view.phone.menu.Avatars',
        'Melisa.panel.view.phone.menu.Options'
    ],
    
    alias: 'widget.apppanelmenumodal',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 9999,
    width: '80%',
    hideOnMaskTap: true,
    hideAnimation: 'slideOut',
    modal: false,
    cls: 'core-modal',
    showAnimation: {
        type: 'slide',
        direction: 'right'
    },
    scrollable: true,
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