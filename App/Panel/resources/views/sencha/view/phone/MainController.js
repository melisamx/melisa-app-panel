Ext.define('Melisa.panel.view.phone.MainController', {
    extend: 'Melisa.core.ViewController',    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.ux.Loader',
        'Melisa.core.menus.Tree',
        'Melisa.panel.view.phone.menu.Modal',
        'Melisa.core.module.Manager'
    ],
    
    listen: {
        global: {
            activatemodule: 'onActivateModule'
        }
    },
    
    routes: {
        home: 'onRouteShowHome'
    },
    
    onRender: function() {
        
        var me = this,
            model = me.getViewModel(),
            menuMain = model.getStore('menuMain'),
            options = Melisa.core.menus.Tree.build(Ext.manifest.melisa.menu);
        
        menuMain.getRoot().appendChild(options);
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
            
            me.menu = Ext.create('widget.apppanelmenumodal', {
                viewModel: me.getViewModel()
            });            
            Ext.Viewport.add(me.menu);
            
        }
        
        return me.menu;
        
    },
    
    onTapBtnTitle: function() {
        
        var me = this,
            menu = me.getMenu();
        
        menu.show();
        
    },
    
    onActivateModule: function(module) {
        
        var me = this;
        
        if( !module) {
            
            me.redirectTo('home');
            return;
            
        }
        
        me.getView().setActiveItem(module);
        
    }
    
});
