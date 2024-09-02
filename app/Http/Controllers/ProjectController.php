<?php

namespace App\Http\Controllers;

use App\Actions\Project\CreateProjectAction;
use App\Actions\Project\DeleteProjectAction;
use App\Actions\Project\ListProjectsAction;
use App\Actions\Project\UpdateProjectAction;
use App\Actions\Task\ListTasksAction;
use App\Http\Requests\ProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ListProjectsAction $listProjectsAction)
    {
        $projects = $listProjectsAction->execute();

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Projects/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $request, CreateProjectAction $createProjectAction)
    {
        $createProjectAction->execute($request->validated());

        return to_route('projects.index')->with('success', 'Project created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project, ListTasksAction $listTasksAction)
    {
        $tasks = $listTasksAction->execute($project->tasks());

        return Inertia::render('Projects/Show', [
            'project' => new ProjectResource($project->loadCount('tasks')),
            'tasks' => $tasks,
            'queryParams' => !empty(request()->query()) ? request()->query() : null
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/Edit', [
            'project' => new ProjectResource($project),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProjectRequest $request, Project $project, UpdateProjectAction $updateProjectAction)
    {
        $updateProjectAction->execute($project, $request->validated());

        return to_route('projects.index')->with('success', "Project \"$project->name\" updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project, DeleteProjectAction $deleteProjectAction)
    {
        $name = $project->name;

        $deleteProjectAction->execute($project);

        return to_route('projects.index')->with('success', "Project \"$name\" deleted");
    }
}
