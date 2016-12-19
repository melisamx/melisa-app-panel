<?php namespace App\Panel\Modules;

use App\Core\Modules\ManifestSenchaModule;
use App\Core\Logics\Identities\IdentitySession;
use App\Core\Repositories\IdentitiesRepository;
use App\Core\Repositories\UsersRepository;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class ManifesModule extends ManifestSenchaModule
{
        
    public function config() {
        
        /* necesary no function hidden attributes */
        $user = app()->make(UsersRepository::class)->find(request()->user()->id, [
            'id', 'name', 'email']
        );
        
        $idIdentity = app()->make(IdentitySession::class)->init($user->id);
        $identity = [];
        
        if( $idIdentity) {
            
            $identity = app()->make(IdentitiesRepository::class)->find($idIdentity);
            
        }
        
        if( $this->debug) {
            
            $this->jsAdd []= config('app.urlLiveReload');
            
        }
        
        return [
            'user'=>$user->getAttributes(),
            'menu'=>$this->getMenu(),
            'appName'=>config('app.name'),
            'urls'=>[
                'realtime'=>config('app.urlRealtime'),
            ],
            'idIdentity'=>$idIdentity,
            'identity'=>$identity,
            'applications'=>[
                'driver'=>[
                    'redirect'=>'/driver.php/drivers/'
                ],
                'chat'=>$this->module('task.chat.chat.view.access', false),
                'security'=>$this->module('task.chat.chat.view.access', false),
            ]
        ];
        
    }
    
}
