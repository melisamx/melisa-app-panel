<?php namespace App\Panel\Database\Seeds;

use Illuminate\Database\Seeder;

class MenusOptionsSeeder extends Seeder
{
    
    public function run()
    {
        
        app('App\Core\Logics\Menus\Install')->init([
            'app.panel.main'=>[
                'app.driver.access'=>[
                    'app.driver.passengers.profile.view.access'
                ]
            ],
        ]);
        
    }
    
}
