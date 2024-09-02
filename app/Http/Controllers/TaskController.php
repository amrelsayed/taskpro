<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\TaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use App\Models\Task;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Task::query();

        $tasks = $query->with('project:id,name')->paginate(10);

        return Inertia::render('Tasks/Index', [
            'tasks' => TaskResource::collection($tasks)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $projects = Project::all();

        return Inertia::render("Tasks/Create", [
            'projects' => ProjectResource::collection($projects),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
        $data = $request->validated();

        Task::create($data);

        return to_route('tasks.index')->with('success', 'Task created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        $projects = Project::all();

        return Inertia::render('Tasks/Edit', [
            'task' => new TaskResource($task),
            'projects' => ProjectResource::collection($projects)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, Task $task)
    {
        $task->update($request->validated());

        return to_route('tasks.index')->with('success', "Task \"$task->name\" updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $name = $task->name;

        $task->delete();

        return to_route('tasks.index')->with('success', "Task \"$name\" deleted");
    }
}
