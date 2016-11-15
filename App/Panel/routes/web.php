<?php 

Route::get('/', 'HomeController@index')->middleware('auth');

Route::get('/login', function() {
    
    return redirect('../login');
    
});
