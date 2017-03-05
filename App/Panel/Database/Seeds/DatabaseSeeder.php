<?php namespace App\Panel\Database\Seeds;

use Melisa\Laravel\Database\InstallSeeder;

/**
 * 
 *
 * @author Luis Josafat Heredia Contreras
 */
class DatabaseSeeder extends InstallSeeder
{
    
    public function run()
    {
                
        $this->call(ApplicationSeeder::class);        
        $this->call(AssetsSeeder::class);
        $this->call(MenusSeeder::class);
        $this->call(MenusOptionsSeeder::class);
        
        $this->cleanLogs();
        
    }
    
}
