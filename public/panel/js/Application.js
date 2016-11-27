Ext.application({
    name: 'Melisa.panel',
    extend: 'Melisa.core.Application',
    
    requires: [
        'Melisa.core.Application'
    ],
    
    defaultToken: 'home',
    
    profiles: [
        'Desktop',
        'Phone',
        'Tablet'
    ]
    
});
