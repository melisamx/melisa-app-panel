
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
        
        if( !node.data.module) {
            
            return;
            
        }
        
        me.alternativeNameSpace(node.data.module);
        
    },
    
    alternativeNameSpace: function(module) {
        
        var me = this;
        
        Melisa.core.module.Manager.launch(module, function(module) {
            
            module.on('ready', me.onReadyModule, me);
            
        });
        
    },
    
    alternativeUrl: function() {
        
        Ext.Ajax.request({
            url: node.data.module.url,
            method: 'GET',
            success: function() {
                console.log('success', arguments);
            },
            failure: function(response, opts) {
                console.log('error', arguments);
            }
        });
        
    },
    
    onLoadRequire: function(nameSpace) {
        
        var me = this,
            instance = Ext.create(nameSpace);
        
        console.log('onLoadRequire', instance);
        
        instance.getController().on('ready', me.onReadyModule, me);
        
    },
    
    onReadyModule: function(module) {
        console.log('onReadyModule', arguments);
        var me = this,
            main = Ext.first('apppanelcenter'),
            moduleModel = module.getViewModel();
        
        main.add(module);
        main.setActiveItem(module);
        me.getViewModel().set({
            moduleActive: {
                title: moduleModel.get('wrapper.title'),
                nameSpace: Ext.getClassName(module)
            }
        });
        
    }
    
});
