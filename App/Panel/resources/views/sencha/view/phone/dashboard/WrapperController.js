Ext.define('Melisa.panel.view.phone.dashboard.WrapperController', {
    extend: 'Melisa.core.ViewController',    
    alias: 'controller.apppanelmain',
    
    requires: [
        'Melisa.ux.Loader',
        'Melisa.view.phone.menu.Modal',
        'Melisa.core.menus.Tree'
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
            viewModel = me.getViewModel(),
            menuMain = viewModel.getStore('menuMain'),
            config = Ext.manifest.melisa,
            options;
    
        if( !Ext.isEmpty(config.menu)) {
            
            options = Melisa.core.menus.Tree.build(config.menu);
            menuMain.getRoot().appendChild(options);
            
        }
        
        viewModel.setData(config);
        Ext.History.on('change', me.onChangeHistory, me);
        Ext.GlobalEvents.on('showcard', me.onGlobalShowCard, me);
        Ext.Loader.loadScript(config.urls.realtime);
        
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
