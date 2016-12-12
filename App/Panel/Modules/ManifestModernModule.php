<?php namespace App\Panel\Modules;

use App\Panel\Modules\ManifestClassicModule;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ManifestModernModule extends ManifestClassicModule
{
    
    public $type = 'modern';
    
    public $cssAdd = [
        'animatecss',
        'fontawesome',
        'app.panel.app.phone.css',
        'roboto'
    ];
    
    public $jsAdd = [
        'momentjs',
        'momentjs.locales',
        'momentjs.precise.range',
        'app.panel.app',
    ];
    
    public function getMenu() {
        
        return $this->menu('menu.panel.phone.main');
        
    }
    
}
