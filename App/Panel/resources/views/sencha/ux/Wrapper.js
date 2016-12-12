Ext.define('Melisa.panel.ux.Wrapper', {
    extend: 'Ext.panel.Panel',
    
    layout: 'fit',
    
    onCloseModule: function() {
        
        
        
    },
    
    bbar: [
        '->',
        {
            bind: {
                text: '{i18n.btnSave}'
            },
            listeners: {
                click: 'onClickBtnSave'
            }
        }
    ]
    
});
