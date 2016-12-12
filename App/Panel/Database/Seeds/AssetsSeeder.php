<?php namespace App\Panel\Database\Seeds;

use Illuminate\Database\Seeder;
use Melisa\Laravel\Database\FirstOrCreate;

class AssetsSeeder extends Seeder
{
    
    use FirstOrCreate;
    
    public function run()
    {
        
        $this->firstOrCreate('App\Core\Models\Assets', [
            [
                'find'=>[
                    'id'=>'app.panel.app',
                ],
                'values'=>[
                    'idAssetType'=>1,
                    'name'=>'Application Panel',
                    'path'=>'/panel/js/Application.js',
                ]
            ],
            [
                'find'=>[
                    'id'=>'app.panel.app.css',
                ],
                'values'=>[
                    'idAssetType'=>2,
                    'name'=>'Panel CSS Dashboard',
                    'path'=>'/panel/css/app.css',
                ]
            ],
            [
                'find'=>[
                    'id'=>'app.panel.app.phone.css',
                ],
                'values'=>[
                    'idAssetType'=>2,
                    'name'=>'Panel CSS Version Phone Dashboard',
                    'path'=>'/panel/css/app-phone.css',
                ]
            ]
        ]);
        
    }
    
}
