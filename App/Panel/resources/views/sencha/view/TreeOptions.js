Ext.define('Melisa.panel.view.TreeOptions', {
    extend: 'Ext.list.Tree',
    
    requires: [
        'Melisa.panel.view.TreeOptionsController'
    ],
        
    controller: 'apppaneltreeoptions',
    alias: 'widget.apppaneltreeoptions',
    ui: 'navigation',
    defaults: {
        indent: 15
    },
    expanderFirst: false
        
});
