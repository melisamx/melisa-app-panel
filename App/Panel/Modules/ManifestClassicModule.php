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
        
        $users = app()->make('App\Core\Models\User');
        
        /* necesary no function hidden attributes */
        $user = $users->find(request()->user()->id, [
            'id', 'name', 'email']
        );
        
        return [
            'user'=>$user->getAttributes(),
            'menu'=>$this->getMenu(),
            'appName'=>config('app.name'),
            'urls'=>[
                'realtime'=>'https://demo.nerine.mx:8044/',
            ],
            'identity'=>'asd'
        ];
        
    }
    
    public function getMenu() {
        
        return $this->menu('menu.panel.main');
        
    }
    
}
