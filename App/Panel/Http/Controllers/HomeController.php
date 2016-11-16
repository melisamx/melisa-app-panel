<?php namespace App\Panel\Http\Controllers;

use Melisa\Laravel\Http\Controllers\Controller;
use App\Core\Logics\Redirects\Redirects;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class HomeController extends Controller
{
    
    public function index(Request $request, Redirects $redirect)
    {
        
        $response = $redirect->init($request->user()->id);
        
        if( $response instanceof RedirectResponse) {
            
            return $response;
            
        }
        
        return 'View panel';
        
    }
    
}
