<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'status',
    ];

    const TODO_STATUS = 'todo';
    const INPROGRESS_STATUS = 'in-progress';
    const INREVIEW_STATUS = 'in-review';
    const TESTING_STATUS = 'testing';
    const DONE_STATUS = 'done';

    const STATUSES = [
        self::TODO_STATUS,
        self::INPROGRESS_STATUS,
        self::INREVIEW_STATUS,
        self::TESTING_STATUS,
        self::DONE_STATUS,
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
