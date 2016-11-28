Ext.define('Melisa.panel.view.desktop.MainController', {
    extend: 'Melisa.core.ViewController',
    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.ux.Loader',
        'Melisa.core.menus.Tree',
        'Melisa.core.module.Manager'
    ],
    
    onRender: function() {
        
        var me = this,
            model = me.getViewModel(),
            menuMain = model.getStore('menuMain'),
            options = Melisa.core.menus.Tree.build(Ext.manifest.melisa.menu);
        
        menuMain.getRoot().appendChild(options);
        
    },
    
    onClickCloseModule: function() {
        
        var me = this,
            model = me.getViewModel(),
            moduleActive = model.get('moduleActive.nameSpace');
        
        if( Melisa.core.module.Manager.unRegister(moduleActive)) {
            
            model.set('moduleActive', null);
            
        }
        
    }
    
});
