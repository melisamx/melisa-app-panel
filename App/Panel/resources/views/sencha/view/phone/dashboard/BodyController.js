Ext.define('Melisa.panel.view.phone.dashboard.BodyController', {
    extend: 'Melisa.core.ViewController',    
    alias: 'controller.panelbodycontroller',
    
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
        
        me.moduleRun(config, me.onReadyOrRebootModule, me.onReadyOrRebootModule, button);
        
    },
    
    onReadyOrRebootModule: function(button, module) {
        
        var main = Ext.first('apppanelmain');
        
        button.enable();
        main.setActiveItem(module);
        
    }
    
});
