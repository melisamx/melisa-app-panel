Ext.define('Melisa.panel.view.phone.dashboard.BodyController', {
    extend: 'Melisa.core.ViewController',    
    alias: 'controller.panelbodycontroller',
    
    requires: [
        'Melisa.core.module.Manager'
    ],
    
    control: {
        'gmdbuttonmedia': {
            tap: 'onTapBtnMedia'
        }
    },    
    
    onTapBtnMedia: function(button) {
        
        var me = this,
            config = button.getMelisa();
    
        button.disable();
        
        if( config.redirect) {
            
            me.log('redirect to', config.redirect);
            window.location = config.redirect;
            return;
            
        }
        
        Melisa.core.module.Manager.launch(config, function(module) {
            
            if( module.getIsReady()) {
                
                module.on('reboot', me.onReadyOrRebootModule, me, {
                    single: true,
                    args: [ button ]
                });
                
            } else {
                
                module.on('ready', me.onReadyOrRebootModule, me, {
                    single: true,
                    args: [ button ]
                });
                
            }
            
        });
        
    },
    
    onReadyOrRebootModule: function(button, module) {
        
        var main = Ext.first('apppanelmain');
        
        button.enable();
        main.setActiveItem(module);
        
    }    
    
});
