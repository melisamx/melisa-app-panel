<?php 

Route::get('/', 'HomeController@index')->middleware('auth');

Route::get('/login', function() {    
    return redirect('../login');    
});

Route::get('/logout', function() {    
    /* necesary no destroy session */
    session()->flush();    
    Auth::logout();
    return redirect('../login');    
});

Route::group([
    'prefix'=>'manifest',
    'middleware'=>'auth'
], function() {    
    Route::get('/classic', 'HomeController@manifestClassic');
    Route::get('/modern', 'HomeController@manifestModern');
});
