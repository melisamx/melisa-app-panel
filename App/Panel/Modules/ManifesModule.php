<?php namespace App\Panel\Modules;

use App\Core\Modules\ManifestSenchaModule;
use App\Core\Logics\Identities\IdentitySession;
use App\Core\Repositories\IdentitiesRepository;
use App\Core\Repositories\UsersRepository;
use App\Security\Logics\Users\Avatars\GetAvatar;

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
        
        $userAvatar = $this->getAvatarUser($user);
        
        return [
            'user'=>$user->getAttributes(),
            'menu'=>$this->getMenu(),
            'appName'=>config('app.name'),
            'urls'=>[
                'realtime'=>config('app.urlRealtime'),
            ],
            'idIdentity'=>$idIdentity,
            'identity'=>$identity,
            'avatar'=>$userAvatar,
            'modules'=>[
                'driver'=>[
                    'redirect'=>'/driver.php/passengers/'
                ],
                'drive'=>$this->module('task.drive.files.public.view'),
                'chat'=>$this->module('task.chat.phone.chat.view.access', false),
                'security'=>$this->module('task.chat.chat.view.access', false),
                'llantas'=>$this->module('task.llantas.llantas.escanear.access', false),
                'tracking'=>$this->module('task.tracking.phone.pedimentos.view.access', false),
                'lamina'=>$this->module('task.lamina.phone.programaciones.view.access', false),
            ]
        ];
        
    }
    
    public function getAvatarUser($user = null)
    {        
        return app()->make(GetAvatar::class)->init($user);        
    }
    
    public function getMenu() {
        
        return $this->menu('menu.panel.phone.main');
        
    }
    
}
