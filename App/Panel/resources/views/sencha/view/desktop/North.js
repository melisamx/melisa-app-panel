Ext.define('Melisa.panel.view.desktop.North', {
    extend: 'Ext.panel.Panel',
    
    alias: 'widget.apppanelnorth',
    region: 'north',
    cls: 'north',
    height: 80,
    layout: 'border',
    reference: 'panelnorth',
    items: [
        {
            region: 'west',
            xtype: 'button',
            iconCls: 'fa fa-bars',
            cls: 'btnMain',
            enableToggle: true,
            scale: 'large',
            listeners: {
                toggle: 'onToogleBtnMain'
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
