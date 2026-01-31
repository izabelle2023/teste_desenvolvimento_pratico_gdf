<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Nome da tabela fictícia
    protected $table = 'usuarios';

    // Campos permitidos
    protected $fillable = [
        'email',
        'senha',
        'dt_nascimento'
    ];

    // Desabilita timestamps automáticos
    public $timestamps = false;
}
