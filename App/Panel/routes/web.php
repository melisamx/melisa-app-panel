<?php 

Route::get('/', 'HomeController@index')->middleware('auth');

Route::get('/login', function() {
    
    return redirect('../login');
    
});

Route::get('/logout', function() {
    
    Auth::logout();
    return redirect('../login');
    
});

Route::group([
    'prefix'=>'manifest'
], function() {
    
    Route::get('/classic', 'HomeController@manifestClassic');
    Route::get('/modern', 'HomeController@manifestModern');

});
