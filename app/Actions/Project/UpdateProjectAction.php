<?php

namespace App\Actions\Project;

use App\Models\Project;

class UpdateProjectAction
{
    public function execute(Project $project, array $data)
    {
        $project->update($data);
    }
}
