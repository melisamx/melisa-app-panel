
Ext.define('Melisa.panel.view.desktop.MainController', {
    extend: 'Melisa.core.ViewController',
    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.ux.Loader'
    ],
    
    onRender: function() {
        
        Ext.create('Melisa.ux.Loader').destroy();
        
    }
});

