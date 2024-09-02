<?php

namespace App\Actions\Project;

use App\Models\Project;

class DeleteProjectAction
{
    public function execute(Project $project)
    {
        $project->delete();
    }
}
