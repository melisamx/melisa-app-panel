Ext.define('Melisa.panel.view.phone.dashboard.Body', {
    extend: 'Ext.Container',
    alias: 'widget.apppanelbody',
    reference: 'conApplicationsList',
    
    requires: [
        'Melisa.view.phone.gmd.Card',
        'Melisa.view.phone.gmd.CardActions',
        'Melisa.view.phone.gmd.ButtonMedia',
        'Melisa.view.phone.gmd.ButtonAction',
        'Melisa.panel.view.phone.dashboard.BodyController',
        'Melisa.core.Module'
    ],
    
    mixins: [
        'Melisa.core.Module'
    ],
    
    controller: 'panelbodycontroller',
    cls: 'applications-list',
    scrollable: true,
    viewModel: {},
    items: [
        {
            xtype: 'gmdcard',
            userCls: 'card-driver',
            bind: {
                hidden: '{!modules.driver.allowed}'
            },
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
            bind: {
                hidden: '{!modules.chat.allowed}'
            },
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
            bind: {
                hidden: '{!modules.llantas.allowed}'
            },
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
            bind: {
                hidden: '{!modules.llantas.allowed}'
            },
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
            bind: {
                hidden: '{!modules.lamina.allowed}'
            },
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
