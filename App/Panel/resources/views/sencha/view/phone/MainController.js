
Ext.define('Melisa.panel.view.phone.MainController', {
    extend: 'Melisa.core.ViewController',
    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.ux.Loader',
        'Melisa.panel.view.phone.menu.Modal'
    ],
    
    routes: {
        menu: 'onRouteShowMenu',
        home: 'onRouteShowHome',
        list: 'onRouteShowList'
    },
    
    onRender: function() {
        
        Ext.create('Melisa.ux.Loader').destroy();
        
    },
    
    onRouteShowMenu: function() {
        
        var me = this,
            menu = me.getMenu();
        
        menu.show();
        
    },
    
    onRouteShowHome: function() {
        
        var me = this,
            menu = me.getMenu();
    
        menu.hide();
        Ext.Viewport.setActiveItem(me.getView());
        me.navigateCard('apppanelbody');
        
    },
    
    navigateCard: function(component) {
        
        var me = this,
            view = me.getView(),
            cmp = me.lookupReference(component);
        
        view.setActiveItem(cmp);
        return cmp;
        
    },
    
    getMenu: function() {
        
        var me = this;
        
        if( !me.menu) {
            
            me.menu = Ext.create('widget.apppanelmenumodal', {
                listeners: {
                    hide: me.onHideMenu,
                    scope: me
                }
            });
            
            Ext.Viewport.add(me.menu);
            
        }
        
        return me.menu;
        
    },
    
    onHideMenu: function() {
        
        this.redirectTo('home');
        
    },
    
    onTapBtnTitle: function() {
        
        this.redirectTo('menu');
        
    }
    
});
