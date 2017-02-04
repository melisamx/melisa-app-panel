<?php namespace App\Panel\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
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
                    'option.lamina.reportes.view.access',
                    'option.lamina.firmas.view.access',
                    'option.lamina.reports.access'=>[
                        'option.lamina.reports.consecutivos.access'
                    ],
                ],
                'option.events.access'=>[
                    'option.events.binnacle.view.access',
                ],
                'option.pedimentos.access'=>[
                    'option.pedimentos.desktop.pedimentos.view.access',
                ],
                'option.evaluations.access'=>[
                    'option.evaluations.desktop.providers.view.access',
                    'option.evaluations.desktop.providers.evaluations.view.access',
                ],
                'option.drive.access'=>[
                    'option.drive.browser.view.access',
                ],
                'option.security.access'=>[
                    'option.security.users.view.access',
                    'option.security.scopes.view.access',
                    'option.security.passwordless.view.access'
                ],
            ],
            'menu.panel.phone.main'=>[
                'option.driver.access'=>[
                    'option.driver.phone.passengers.profile.view.access'
                ],
                'option.tracking.phone.pedimentos.view.access',
                'option.lamina.access'=>[
                    'option.lamina.phone.programaciones.view.access'
                ],
                'option.chat.phone.chat.view.access',
                'option.llantas.access'=>[
                    'option.llantas.phone.llantas.escanear.access'
                ],
                'option.security.access'=>[
                    'option.security.phone.passwordless.view.access'
                ],
                'option.pedimentos.access'=>[
                    'option.pedimentos.phone.pedimentos.view.access',
                ]
            ],
        ]);
        
    }
    
}
