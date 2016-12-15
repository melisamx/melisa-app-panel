Ext.define('Melisa.panel.view.phone.TreeOptionsController', {
    extend: 'Melisa.panel.view.universal.TreeOptionsController',
    
    onSelectionChange: function() {
        
        this.callParent(arguments);
        
        Ext.first('apppanelmenumodal').hide();
        
    }
    
});
