<?php

use Illuminate\Support\Facades\Route;

Route::post('/auth/login', 'AuthController@login');
Route::post('/auth/register', 'AuthController@register');
Route::get('/auth/logout', 'AuthController@logout');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', 'UserController@index');
    Route::get('/users/{id}', 'UserController@show');
    Route::post('/users', 'UserController@store');
    Route::put('/users/{id}', 'UserController@update');
    Route::delete('/users/{id}', 'UserController@destroy');

    Route::get('/todos', 'TodoController@index');
    Route::get('/todos/{id}', 'TodoController@show');
    Route::post('/todos', 'TodoController@store');
    Route::put('/todos/{id}', 'TodoController@update');
    Route::delete('/todos/{id}', 'TodoController@destroy');

    Route::get('/items', 'ItemController@index');
    Route::get('/items/{id}', 'ItemController@show');
    Route::post('/items', 'ItemController@store');
    Route::put('/items/{id}', 'ItemController@update');
    Route::delete('/items/{id}', 'ItemController@destroy');
});
