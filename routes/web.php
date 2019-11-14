<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/', 'Frontend\IndexController@index')->name('index');
Route::get('nccp', 'Frontend\IndexController@nccp');
Route::get('news', 'Frontend\IndexController@news');
Route::get('zjpp', 'Frontend\IndexController@zjpp');
Route::get('jmwm', 'Frontend\IndexController@jmwm');
Route::get('top', 'Frontend\IndexController@top');
Route::get('fee', 'Frontend\IndexController@fee');

