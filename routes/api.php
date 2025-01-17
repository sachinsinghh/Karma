<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login','API\LoginController@login');
Route::post('register','API\LoginController@register');
Route::post('addSlider','API\LoginController@addSlider');
Route::post('sliderList','API\LoginController@sliderList');
Route::delete('sliderDelete/{id}','API\LoginController@delete');
Route::get('sliderEdit/{id}','API\LoginController@sliderEdit');