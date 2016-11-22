
Ext.define('Melisa.panel.view.TreeOptionsController', {
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
        
        Ext.first('apppanelmenumodal').hide();
        Ext.require(node.data.my, me.onLoadRequire, me);
        
    },
    
    onLoadRequire: function(ns) {
        
        var me = this,
            instance = Ext.create(ns),
            main = Ext.first('apppanelmain');
        
        main.add(instance);
        main.setActiveItem(instance);
        
    }
    
});