<?php namespace App\Panel\Modules;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ManifestClassicModule extends ManifesModule
{
    
    public $cssAdd = [
        'animatecss',
        'app.panel.app.css',
        'roboto'
    ];
    
    public $jsAdd = [
        'debug'=>[
            'app.panel.app',
        ],
        'nodebug'=>[
            'app.sencha.classic',
            'app.panel.app',
        ]
    ];
    
    public function getMenu() {
        
        return $this->menu('menu.panel.main');
        
    }
    
}
