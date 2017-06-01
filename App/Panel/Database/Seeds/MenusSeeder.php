<?php

namespace App\Panel\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class MenusSeeder extends InstallSeeder
{
    
    public function run()
    {        
        $this->installMenu('menu.panel.main', [
           'name'=>'Menu main in Application Panel',
        ]);
        
        $this->installMenu('menu.panel.phone.main',  [
            'name'=>'Menu main in Application Panel version phone',
        ]);        
    }
    
}
