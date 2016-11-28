<?php namespace App\Panel\Database\Seeds;

use Illuminate\Database\Seeder;

class MenusOptionsSeeder extends Seeder
{
    
    public function run()
    {
        
        app('App\Core\Logics\Menus\Install')->init([
            'menu.panel.main'=>[
                'option.driver.access'=>[
                    'option.driver.passengers.profile.view.access'
                ]
            ],
            'menu.panel.phone.main'=>[
                'option.driver.access'=>[
                    'option.driver.phone.passengers.profile.view.access'
                ]
            ],
        ]);
        
    }
    
}
