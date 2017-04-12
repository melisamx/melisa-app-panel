Ext.define('Melisa.panel.view.desktop.dashboard.North', {
    extend: 'Ext.panel.Panel',    
    alias: 'widget.apppanelnorth',
    
    cls: 'north',
    layout: 'border',
    height: 80,
    items: [
        {
            region: 'west',
            xtype: 'button',
            iconCls: 'fa fa-bars',
            cls: 'btnMain',
            enableToggle: true,
            scale: 'large',
            listeners: {
                toggle: 'showMainMenu'
            }
        },
        {
            region: 'center',
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    cls: 'powerby',
                    html: '<img src="/assets/images/powerby.png" height="25" />'
                }
            ]
        },
        {
            region: 'east',
            xtype: 'toolbar',
            items: [
                {
                    widht: 300,
                    cls: 'identity-position',
                    textAlign: 'rigth',
                    listeners: {
                        click: 'onClickBtnUser'
                    },
                    bind: {
                        text: [
                            '<h3 class="name">{identityName}</h3>',
                            '<p class="position">Gerente de operaciones</p>',
                            '<img class="avatar" src="{urlAvatar}{avatar.idFileAvatar}/?nc={avatar.updatedAt ? avatar.updatedAt : avatar.createdAt}">'
                        ].join('')
                    }
                }
            ]
        }
    ]
});
