Ext.define('Melisa.panel.view.TreeOptions', {
    extend: 'Ext.list.Tree',
    alias: 'widget.apppaneltreeoptions',
    
    requires: [
        Ext.platformTags.classic ? 
            'Melisa.panel.view.desktop.TreeOptionsController' : 
            'Melisa.panel.view.phone.TreeOptionsController'
    ],
        
    controller: 'apppaneltreeoptions',
    ui: 'navigation',
    expanderFirst: false,
    defaults: {
        indent: 15
    }
        
});
