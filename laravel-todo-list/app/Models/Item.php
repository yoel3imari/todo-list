<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = ["content", "deadline", "completed", "todo_id"];

    protected $casts = [
        "deadline" => "datetime",
        "compeleted" => "boolean",
        "todo_id" => "integer"
    ];

    public function todo(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Todo::class);
    }
}
