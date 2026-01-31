<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    // LOGIN SIMPLES
    public function acessar(Request $request)
    {
        $email = $request->input('email');
        $senha = $request->input('senha');

        // "Banco fictício"
        $usuarios = [
            ['email' => 'admin@email.com', 'senha' => '123456'],
            ['email' => 'user@email.com', 'senha' => 'senha123'],
        ];

        foreach ($usuarios as $user) {
            if ($user['email'] === $email && $user['senha'] === $senha) {
                return response()->json([
                    'success' => true,
                    'email' => $email
                ]);
            }
        }

        return response()->json([
            'success' => false,
            'message' => 'Credenciais inválidas'
        ], 401);
    }

    // REGISTRO SIMPLES (SEM VALIDAÇÃO)
    public function registrar(Request $request)
    {
        return response()->json([
            'success' => true,
            'message' => 'Usuário registrado com sucesso',
            'user' => [
                'email' => $request->input('email')
            ]
        ]);
    }

    // LISTAGEM SIMPLES
    public function listagem()
    {
        return response()->json([
            'success' => true,
            'usuarios' => [
                ['email' => 'admin@email.com'],
                ['email' => 'user@email.com']
            ]
        ]);
    }
}
