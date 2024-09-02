<?php

namespace App\Actions\Task;

use App\Models\Task;

class DeleteTaskAction
{
    public function execute(Task $task)
    {
        $task->delete();
    }
}
