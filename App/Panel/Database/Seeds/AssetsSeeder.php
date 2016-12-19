<?php namespace App\Panel\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class AssetsSeeder extends InstallSeeder
{
    
    public function run()
    {
        
        $this->installAssetJs('app.panel.app', [
            'name'=>'Application Panel',
            'path'=>'/panel/js/Application.js',
        ]);
        
        $this->installAssetCss('app.panel.app.css', [
            'name'=>'Panel CSS Dashboard',
            'path'=>'/panel/css/app.css',
        ]);
        
        $this->installAssetCss('app.panel.app.phone.css', [
            'name'=>'Panel CSS Version Phone Dashboard',
            'path'=>'/panel/css/app-phone.css',
        ]);
        
    }
    
}
