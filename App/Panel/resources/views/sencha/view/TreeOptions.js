
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
    
    store: Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [
                {
                    text: 'Security',
                    iconCls: 'fa x-fa fa-comment',
                    my: 'Melisa.chat.view.phone.Main',
                    leaf: true
                },
                {
                    text: 'System',
                    iconCls: 'fa x-fa fa-folder',
                    my: 'Melisa.drive.view.phone.Main',
                    leaf: true
                },
                {
                    text: 'Binacle',
                    iconCls: 'fa x-fa fa-picture-o',
                    my: 'Melisa.binacle.view.phone.Main',
                    leaf: true
                }
            ]
        }
    })
        
});
