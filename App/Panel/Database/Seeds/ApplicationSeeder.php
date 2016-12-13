<?php namespace App\Panel\Database\Seeds;

use Illuminate\Database\Seeder;
use Melisa\Laravel\Database\InstallApplication;

class ApplicationSeeder extends Seeder
{    
    use InstallApplication;
    
    public function run()
    {
        
        $this->installApplication('panel', [
            'name'=>'Panel',
            'description'=>'Application Panel',
            'nameSpace'=>'Melisa.panel',
            'typeSecurity'=>'arat',
            'version'=>'1.0.2',
        ]);
        
    }
    
}
