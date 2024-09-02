<?php

namespace App\Actions\Task;

use App\Models\Task;

class UpdateTaskAction
{
    public function execute(Task $task, array $data)
    {
        $task->update($data);
    }
}
