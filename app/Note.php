<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{

    protected $fillable = ['note', 'note', 'password'];
    protected $hidden =['password'];
    public $rules = [
        'name' => 'required|max:10',
        'note' => 'required|max:255',
        'password' => 'required',
    ];
    public $messages = [
        'required' => 'The :attribute field is required !',
        'max' => 'Max length exceeded for :attribute !',
    ];
}
