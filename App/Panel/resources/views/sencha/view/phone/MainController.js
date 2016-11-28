
Ext.define('Melisa.panel.view.phone.MainController', {
    extend: 'Melisa.core.ViewController',
    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.ux.Loader',
        'Melisa.panel.view.phone.menu.Modal'
    ],
    
    routes: {
        home: 'onRouteShowHome'
    },
    
    onRender: function() {
        
        var me = this;
               
        Ext.History.on('change', me.onChangeHistory, me);
        Ext.GlobalEvents.on('showcard', me.onGlobalShowCard, me);
        
    },
    
    onChangeHistory: function(route) {
        
        var me = this;
        
        if( route) {
            
            return;
            
        }
        
        /* con esto evitamos botón retroceso de android */
        me.redirectTo('home');
        return false;
        
    },
    
    onGlobalShowCard: function(card) {
        
        this.navigateCard(card);
        
    },
    
    onRouteShowHome: function() {
        
        var me = this;
        
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
            
            me.menu = Ext.create('widget.apppanelmenumodal');            
            Ext.Viewport.add(me.menu);
            
        }
        
        return me.menu;
        
    },
    
    onTapBtnTitle: function() {
        
        var me = this,
            menu = me.getMenu();
        
        menu.show();
        
    }
    
});
