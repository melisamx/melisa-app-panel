Ext.define('Melisa.panel.view.phone.dashboard.Body', {
    extend: 'Ext.Container',
    alias: 'widget.apppanelbody',
    reference: 'conApplicationsList',
    
    requires: [
        'Melisa.view.phone.gmd.Card',
        'Melisa.view.phone.gmd.CardActions',
        'Melisa.view.phone.gmd.ButtonMedia',
        'Melisa.view.phone.gmd.ButtonAction',
        'Melisa.panel.view.phone.dashboard.BodyController'
    ],
    
    controller: 'panelbodycontroller',
    cls: 'applications-list',
    scrollable: true,
    items: [
        {
            xtype: 'gmdcard',
            userCls: 'card-driver',
            items: [
                {
                    xtype: 'gmdcardactions',
                    defaults: {
                        xtype: 'gmdbuttonaction'
                    },
                    items: [
                        '->',
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
                        melisa: '{modules.driver}'
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
                        xtype: 'gmdbuttonaction'
                    },
                    items: [
                        '->',
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
                        melisa: '{modules.chat}'
                    }
                }
            ]
        },
        {
            xtype: 'gmdcard',
            userCls: 'card-llantas',
            items: [
                {
                    xtype: 'gmdcardactions',
                    defaults: {
                        xtype: 'gmdbuttonaction'
                    },
                    items: [
                        '->',
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
                    text: 'Melisa Llantas',
                    bind: {
                        melisa: '{modules.llantas}'
                    }
                }
            ]
        },
        {
            xtype: 'gmdcard',
            userCls: 'card-tracking',
            items: [
                {
                    xtype: 'gmdcardactions',
                    defaults: {
                        xtype: 'gmdbuttonaction'
                    },
                    items: [
                        '->',
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
                    text: 'Melisa Tracking',
                    bind: {
                        melisa: '{modules.tracking}'
                    }
                }
            ]
        },
        {
            xtype: 'gmdcard',
            userCls: 'card-lamina',
            items: [
                {
                    xtype: 'gmdcardactions',
                    defaults: {
                        xtype: 'gmdbuttonaction'
                    },
                    items: [
                        '->',
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
                    text: 'Melisa Lamina',
                    bind: {
                        melisa: '{modules.lamina}'
                    }
                }
            ]
        }
    ]
    
});
