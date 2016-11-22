<?php namespace App\Panel\Modules;

use App\Core\Modules\ManifestSenchaModule;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ManifestClassicModule extends ManifestSenchaModule
{
    
    public $cssAdd = [
        'animatecss',
        'app.panel.app.css',
        'roboto'
    ];
    
    public $jsAdd = [
        'app.panel.app',
    ];
    
    public function config() {
        
        return [
            'urls'=>[
                'realtime'=>'https://demo.nerine.mx:8044/',
            ],
            'identity'=>'asd'
        ];
        
    }
    
}
