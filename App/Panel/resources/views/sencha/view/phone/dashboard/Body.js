Ext.define('Melisa.panel.view.phone.dashboard.Body', {
    extend: 'Ext.Container',
    alias: 'widget.apppanelbody',
    
    requires: [
        'Melisa.view.phone.gmd.Card',
        'Melisa.view.phone.gmd.CardActions',
        'Melisa.view.phone.gmd.ButtonMedia',
        'Melisa.view.phone.gmd.ButtonAction',
        'Melisa.panel.view.phone.dashboard.BodyController'
    ],
    
    controller: 'panelbodycontroller',
    cls: 'applications-list',
    reference: 'conApplicationsList',
    scrollable: true,
    items: [
        {
            xtype: 'gmdcard',
            userCls: 'card-driver',
            items: [
                {
                    xtype: 'gmdcardactions',
                    defaults: {
                        align: 'right',
                        xtype: 'gmdbuttonaction'
                    },
                    items: [
                        {
                            iconCls: 'x-fa fa fa-heart',
                            margin: '0 8px 0 0'
                        },
                        {
                            iconCls: 'x-fa fa fa-share'
                        }
                    ]
                },
                {
                    xtype: 'gmdbuttonmedia',
                    text: 'Melisa Driver',
                    bind: {
                        melisa: '{applications.driver}'
                    }
                }
            ]
        },
        {
            xtype: 'gmdcard',
            userCls: 'card-chat',
            items: [
                {
                    xtype: 'gmdcardactions',
                    defaults: {
                        align: 'right',
                        xtype: 'gmdbuttonaction'
                    },
                    items: [
                        {
                            iconCls: 'x-fa fa fa-heart',
                            margin: '0 8px 0 0'
                        },
                        {
                            iconCls: 'x-fa fa fa-share'
                        }
                    ]
                },
                {
                    xtype: 'gmdbuttonmedia',
                    text: 'Melisa Chat',
                    bind: {
                        melisa: '{applications.chat}'
                    }
                }
            ]
        }
    ]
});
