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
    
    config: {
        windowAccount: null
    },
    
    createWindowAccount: function() {
        
        var me = this;
    
        return Ext.create('widget.tooltip', {
            layout: 'anchor',
            cls: 'window-account',
            ui: 'white',
            width: 355,
            height: 200,
            maxHeight: 500,
            minHeight: 82,
            autoHide: false,
            shadow: false,
            autoScroll: true,
            floating: true,
            items: [
                {
                    xtype: 'container',
                    padding: '14 12',
                    margin: '0 0 5',
                    cls: 'identity-container',
                    height: 130,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    }
                }
            ],
            bbar: [
                '->',
                {
                    text: 'Cerrar sessión',
                    handler: me.onClickCerrarSession,
                    scope: me
                }
            ]
        });
            
    },
    
    onClickCerrarSession: function() {
        
        window.location = 'logout';
        
    },
    
    onClickBtnUser: function(button) {
        
        var me = this,
            windowAccount = me.getWindowAccount();
    
        if( !windowAccount) {
            me.setWindowAccount(windowAccount = me.createWindowAccount());
        }
        
        windowAccount.showBy(button, 'tr-br?');
        
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
