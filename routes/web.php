<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/Api/Notes', 'Api\NoteController@index');
Route::post('/Api/Note', 'Api\NoteController@store');
Route::post('/Api/Note/delete', 'Api\NoteController@destroy');
Route::put('/Api/Note/update', 'Api\NoteController@update');
