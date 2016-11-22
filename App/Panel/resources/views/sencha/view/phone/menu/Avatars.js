
Ext.define('Melisa.panel.view.phone.menu.Avatars', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.panel.view.phone.menu.Avatar'
    ],
    
    alias: 'widget.apppanelavatars',
    cls: 'core-avatars',    
    items: [
        {
            xtype: 'toolbar',
            height: '75%',
            items: [
                {
                    xtype: 'apppanelavatar',
                    data: {
//                        url: 'https://lh3.googleusercontent.com/-4uAmRVCLC2g/AAAAAAAAAAI/AAAAAAAAAAA/APaXHhSr2LNrIBo1bvX_ogDi_HVpLFeQ7Q/mo/photo.jpg?sz=86'
                        url: 'https://lh3.googleusercontent.com/-m2FIutiwAj4/AAAAAAAAAAI/AAAAAAAAAAA/AEMOYSArKvZXQHBKK5so5Gn76kYYockGoA/s86-c-mo/photo.jpg'
                    }
                },
                '->',
                {
                    xtype: 'button',
                    cls: 'close-session',
                    text: 'Cerrar sesión',
                    iconCls: 'fa x-fa fa-sign-out',
                    handler: function() {
                        
                        window.location = '/panel.php/logout';
                        
                    }
                }
            ]
        },
        {
            xtype: 'button',
            height: '25%',
            scale: 'large',
            text: Ext.manifest.melisa.user.name + 
                '<br><small>' + 
                Ext.manifest.melisa.user.email + 
                '</smal>',
            iconAlign: 'right',
            iconCls: 'fa fa-caret-down',
            textAlign: 'left',
            cls: 'avatar-selected'
        }
    ]
    
});
