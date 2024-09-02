<?php

namespace App\Actions\Project;

use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ListProjectsAction
{
    public function execute($paginated = true)
    {
        $query = Project::query();

        $query->withCount('tasks');

        if ($paginated) {
            $projects = $query->paginate(10);
        } else {
            $projects = $query->get();
        }

        return ProjectResource::collection($projects);
    }
}
