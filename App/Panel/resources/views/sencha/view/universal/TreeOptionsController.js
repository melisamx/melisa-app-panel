Ext.define('Melisa.panel.view.universal.TreeOptionsController', {
    extend: 'Ext.app.ViewController',
   
    alias: 'controller.apppaneltreeoptions',
   
    init: function(view) {
        
        var me = this;

        view.on({
            selectionchange: me.onSelectionChange,
            scope: me
        });
        
    },
    
    onSelectionChange: function(cmp, node) {
        
        var me = this;
        
        if( !node) {
            
            return;
            
        }
        
        if( !node.data.module) {
            
            return;
            
        }
        
        me.alternativeNameSpace(node.data.module);
        cmp.setSelection(null);
        
    },
    
    alternativeNameSpace: function(module) {
        
        var me = this;
        
        Melisa.core.module.Manager.launch(module, function(module) {
            
            module.on('ready', me.onReadyModule, me);
            
        });
        
    },
    
    onReadyModule: function(module) {
        
        var main = Ext.first('apppanelmain');
        
        Ext.first('apppanelmenumodal').hide();
        main.setActiveItem(module);
        
    }
    
});
