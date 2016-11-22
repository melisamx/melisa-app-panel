Ext.application({
    name: 'Melisa.panel',
    
    requires: [
        'Melisa.core.Application'
    ],
    
    defaultToken : 'home',
    
    profiles: [
        'Desktop',
        'Phone',
        'Tablet'
    ]
});
