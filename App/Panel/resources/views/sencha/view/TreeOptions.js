Ext.define('Melisa.panel.view.TreeOptions', {
    extend: 'Ext.list.Tree',
    
    requires: [
        Ext.platformTags.desktop ? 
            'Melisa.panel.view.TreeOptionsController' : 
            'Melisa.panel.view.universal.TreeOptionsController'
    ],
        
    controller: 'apppaneltreeoptions',
    alias: 'widget.apppaneltreeoptions',
    ui: 'navigation',
    defaults: {
        indent: 15
    },
    expanderFirst: false
        
});
