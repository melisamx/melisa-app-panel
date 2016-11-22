<?php namespace App\Panel\Database\Seeds;

use Illuminate\Database\Seeder;
use Melisa\Laravel\Database\FirstOrCreate;

class ApplicationSeeder extends Seeder
{
    
    use FirstOrCreate;
    
    public function run()
    {
        
        $this->firstOrCreate('App\Core\Models\Applications', [
            [
                'find'=>[
                    'key'=>'panel',
                ],
                'values'=>[
                    'name'=>'Panel',
                    'description'=>'Application Panel',
                    'nameSpace'=>'Melisa.panel',
                    'typeSecurity'=>'arat'
                ]
            ]
        ]);
        
    }
    
}
