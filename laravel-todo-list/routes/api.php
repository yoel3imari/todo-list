<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ItemController;
use App\Http\Controllers\Api\TodoController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/auth/verify', [AuthController::class, 'verify_token']);
    Route::get('/auth/logout ', [AuthController::class, 'logout']);

    Route::resource('/users', UserController::class);
    Route::resource('/todos', TodoController::class);
    Route::resource('/items', ItemController::class);

});
