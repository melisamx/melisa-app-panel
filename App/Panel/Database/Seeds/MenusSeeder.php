<?php namespace App\Panel\Database\Seeds;

use Illuminate\Database\Seeder;
use Melisa\Laravel\Database\UpdateOrCreate;

class MenusSeeder extends Seeder
{
    use UpdateOrCreate;
    
    public function run()
    {
        
        $this->updateOrCreate('App\Core\Models\Menus', [
            [
                'find'=>[
                    'key'=>'app.panel.main', 
                ],
                'values'=>[
                    'name'=>'Menu main in Application Panel',
                ]
            ],  
        ]);
        
    }
    
}
