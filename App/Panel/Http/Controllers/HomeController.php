<?php

namespace App\Panel\Http\Controllers;

use Melisa\Laravel\Http\Controllers\Controller;
use App\Core\Logics\Redirects\Redirects;
use App\Core\Modules\ApplicationSenchaModule;
use App\Panel\Modules\ManifestClassicModule;
use App\Panel\Modules\Applications\ManifestModernModule;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class HomeController extends Controller
{
    
    public function index(Request $request, Redirects $redirect, ApplicationSenchaModule $module)
    {        
        $response = $redirect->init($request->user()->id);
        
        if( $response instanceof RedirectResponse) {
            
            return $response;
            
        }
        
        return $module->render();        
    }
    
    public function manifestClassic(ManifestClassicModule $module)
    {        
        return $module->render();        
    }
    
    public function manifestModern(ManifestModernModule $module)
    {        
        return $module->render();        
    }
    
}
