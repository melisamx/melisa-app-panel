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
        'waves.sencha',
        'app.panel.app.phone.css',
        'roboto'
    ];
    
    public $jsAdd = [
        'jquery',
        'waves',
        'momentjs',
        'momentjs.locales',
        'momentjs.precise.range',
        'https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyAU7V5rGEn4X-ZjFUYqxwu28sAg3Fq6iis',
        'app.panel.app',
    ];
    
    public function config() {
        
        $users = app()->make('App\Core\Models\User');
        
        $user = $users->find(request()->user()->id);
        
        return [
            'user'=>$user->getAttributes(),
            'urls'=>[
                'realtime'=>'https://demo.nerine.mx:8044/',
            ],
            'identity'=>'asd'
        ];
        
    }
    
}
