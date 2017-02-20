Ext.define('Melisa.panel.view.desktop.TreeOptionsController', {
    extend: 'Melisa.panel.view.universal.TreeOptionsController',    
    alias: 'controller.apppaneltreeoptions',
    
    requires: [
        'Melisa.panel.view.universal.TreeOptionsController'
    ],
    
    listen: {
        global: {
            activatemodule: 'updateModuleActive'
        }
    },
    
    onReadyModule: function(module) {
        
        var me = this,
            main = Ext.first('apppanelcenter');
        
        /* necesary, but use setBind replace all bind dont not use */
        module.setTitle(module.getViewModel().get('wrapper.title'));
        module.setClosable(true);
        module.on('close', me.onCloseModule, me, {
            single: true
        })
        
        main.add(module);
        me.updateModuleActive(module);        
        module.on('reboot', me.updateModuleActive, me);
        
    },
    
    onCloseModule: function(module) {
        
        Melisa.core.module.Manager.unRegister(Ext.getClassName(module));
        
    },
    
    updateModuleActive: function(module) {
        
        var me = this,
            main = Ext.first('apppanelcenter'),
            moduleModel = module.getViewModel();
        
        /* necesary if not added in panel center */
        if( !main.down(module)) {
            module.setTitle(module.getViewModel().get('wrapper.title'));
            module.setClosable(true);
            module.on('close', me.onCloseModule, me, {
                single: true
            });
            
            if(typeof module.isWindow === 'undefined') {
                main.add(module);
            }
            
        }
        
        if( typeof module.isWindow !== 'undefined') {
            module.show();
        } else {
            main.setActiveItem(module);
        }
        
        me.getViewModel().set({
            moduleActive: {
                title: moduleModel.get('wrapper.title'),
                nameSpace: Ext.getClassName(module)
            }
        });
        
    },
    
    onRebootModule: function(module) {
        
        console.log('onRebootModule', module);
        
    }
    
});
