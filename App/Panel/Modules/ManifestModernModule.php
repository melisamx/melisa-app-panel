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
        'jquery',
        'momentjs',
        'momentjs.locales',
        'momentjs.precise.range',
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
