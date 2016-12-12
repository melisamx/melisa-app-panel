<?php namespace App\Panel\Database\Seeds;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    
    public function run()
    {
                
        $this->call(ApplicationSeeder::class);        
        $this->call(AssetsSeeder::class);
        $this->call(MenusSeeder::class);
        $this->call(MenusOptionsSeeder::class);
        
    }
    
}
