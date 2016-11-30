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
                ],
                'option.lamina.access'=>[
                    'option.lamina.programaciones.view.access',
                    'option.lamina.tarjas.view.access',
                    'option.lamina.tarjas.add.access',
                    'option.lamina.reportes.view.access',
                ],
            ],
            'menu.panel.phone.main'=>[
                'option.driver.access'=>[
                    'option.driver.phone.passengers.profile.view.access'
                ],
                'option.lamina.access'=>[
                    'option.lamina.phone.programaciones.view.access',
                    'option.lamina.phone.tarjas.add.access',
                ],
            ],
        ]);
        
    }
    
}
