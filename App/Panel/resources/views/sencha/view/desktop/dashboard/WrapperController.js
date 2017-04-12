Ext.define('Melisa.panel.view.desktop.dashboard.WrapperController', {
    extend: 'Melisa.view.desktop.dashboard.tabs.WrapperController',    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.view.desktop.dashboard.tabs.WrapperController'
    ],
    
    onClickCloseModule: function() {
        
        var me = this,
            model = me.getViewModel(),
            moduleActive = model.get('moduleActive.nameSpace');
        
        if( Melisa.core.module.Manager.unRegister(moduleActive)) {
            
            model.set('moduleActive', null);
            
        }
        
    }
    
});
