<?php namespace App\Panel\Http\Controllers;

use Melisa\Laravel\Http\Controllers\Controller;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'Hola panel';
    }
    
}
