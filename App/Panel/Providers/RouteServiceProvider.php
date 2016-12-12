<?php namespace App\Panel\Providers;

use Melisa\Laravel\Providers\RouteServiceProvider as RouteService;

class RouteServiceProvider extends RouteService
{
    
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    public $namespace = 'App\Panel\Http\Controllers';
    
}
