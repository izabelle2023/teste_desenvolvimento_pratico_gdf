<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/acessar', [AuthController::class, 'acessar']);
Route::post('/registrar', [AuthController::class, 'registrar']);
Route::get('/listagem-usuarios', [AuthController::class, 'listagem']);
