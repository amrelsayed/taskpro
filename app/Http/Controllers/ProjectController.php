<?php

namespace App\Http\Controllers;

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
    public function index()
    {
        $query = Project::query();

        $projects = $query->withCount('tasks')->paginate(10);

        return Inertia::render('Projects/Index', [
            'projects' => ProjectResource::collection($projects),
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
    public function store(ProjectRequest $request)
    {
        $data = $request->validated();

        Project::create($data);

        return to_route('projects.index')->with('success', 'Project created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $query = $project->tasks();

        $tasks = $query->with('project:id,name')->paginate(10);

        return Inertia::render('Projects/Show', [
            'project' => new ProjectResource($project->loadCount('tasks')),
            'tasks' => TaskResource::collection($tasks),
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
    public function update(ProjectRequest $request, Project $project)
    {
        $project->update($request->validated());

        return to_route('projects.index')->with('success', "Project \"$project->name\" updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $name = $project->name;

        $project->delete();

        return to_route('projects.index')->with('success', "Project \"$name\" deleted");
    }
}
