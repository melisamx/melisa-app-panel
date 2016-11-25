
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
                    text: 'Driver',
                    iconCls: 'fa x-fa fa-picture-o',
                    melisa: 'Melisa.driver.passengers.profile.View',
                    leaf: true
                },
                {
                    text: 'Security',
                    iconCls: 'fa x-fa fa-comment',
                    melisa: 'Melisa.security.view.phone.Main',
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
