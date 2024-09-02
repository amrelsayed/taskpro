<?php

namespace App\Actions\Task;

use App\Http\Resources\TaskResource;
use App\Models\Task;

class ListTasksAction
{
    public function execute($query = null)
    {
        if (! $query) {
            $query = Task::query();
        }

        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }

        if (request('status')) {
            $query->where('status', request('status'));
        }

        $tasks = $query->with('project:id,name')->paginate(10);

        return TaskResource::collection($tasks);
    }
}
