Ext.define('Melisa.panel.view.desktop.MainController', {
    extend: 'Melisa.core.ViewController',    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.ux.Loader',
        'Melisa.core.menus.Tree',
        'Melisa.core.module.Manager',
        'Melisa.ux.avatar.LocalStorage'
    ],
    
    listen: {
        global: {
            closemoduleactive: 'onClickCloseModule'
        }
    },
    
    onToogleBtnMain: function(button, pressed) {
        
        var me = this,
            panWest = me.lookup('panWest'), 
            treOptions = me.lookup('treOptions');
        
        if( pressed) {
            
            treOptions.setMicro('a');
            panWest.setWidth(62);
            button.up().setWidth(62);
            
        } else {
            
            treOptions.setMicro(null);
            panWest.setWidth(242);
            button.up().setWidth(242);
            
        }
        
    },
    
    onRender: function() {
        
        var me = this,
            model = me.getViewModel(),
            menuMain = model.getStore('menuMain'),
            options = Melisa.core.menus.Tree.build(Ext.manifest.melisa.menu);
        
        model.set('appName', Ext.manifest.melisa.appName);
        model.set('identityName', Ext.manifest.melisa.user.name);
        model.set('urlAvatar', Ext.manifest.melisa.modules.drive);
        model.set('avatar', Ext.manifest.melisa.avatar);
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
