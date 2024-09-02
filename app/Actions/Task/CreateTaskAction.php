<?php

namespace App\Actions\Task;

use App\Models\Task;

class CreateTaskAction
{
    public function execute(array $data)
    {
        Task::create($data);
    }
}
