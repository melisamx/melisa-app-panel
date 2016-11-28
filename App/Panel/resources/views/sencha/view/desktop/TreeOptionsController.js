Ext.define('Melisa.panel.view.desktop.TreeOptionsController', {
    extend: 'Melisa.panel.view.universal.TreeOptionsController',
    
    alias: 'controller.apppaneltreeoptions',
    
    requires: [
        'Melisa.panel.view.universal.TreeOptionsController'
    ],
    
    onReadyModule: function(module) {
        
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
