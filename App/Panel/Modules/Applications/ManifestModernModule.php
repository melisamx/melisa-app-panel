<?php namespace App\Panel\Modules\Applications;

use App\Panel\Modules\ManifesModule;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ManifestModernModule extends ManifesModule
{
    
    public $type = 'modern';
    
    public $cssAdd = [
        'animatecss',
        'fontawesome',
        'app.panel.app.phone.css',
        'roboto'
    ];
    
    public $jsAdd = [
        'debug'=>[
            'app.panel.app',
        ],
        'nodebug'=>[
            'app.sencha.modern',
            'app.panel.app',
        ]        
    ];
    
}
