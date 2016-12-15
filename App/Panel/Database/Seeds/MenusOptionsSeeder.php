<?php namespace App\Panel\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

class MenusOptionsSeeder extends InstallSeeder
{
    
    public function run()
    {
        
        $this->installMenuOptions([
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
                'option.events.access'=>[
                    'option.events.binnacle.view.access',
                ]
            ],
            'menu.panel.phone.main'=>[
                'option.driver.access'=>[
                    'option.driver.phone.passengers.profile.view.access'
                ],
                'option.tracking.phone.pedimentos.view.access',
                'option.lamina.access'=>[
                    'option.lamina.phone.programaciones.view.access',
                    'option.lamina.phone.tarjas.add.access',
                ],
                'option.chat.phone.chat.view.access',
                'option.llantas.access'=>[
                    'option.llantas.phone.llantas.escanear.access'
                ]
            ],
        ]);
        
    }
    
}
