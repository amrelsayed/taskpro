<?php

namespace App\Http\Controllers;

use App\Actions\Project\ListProjectsAction;
use App\Actions\Task\CreateTaskAction;
use App\Actions\Task\DeleteTaskAction;
use App\Actions\Task\ListTasksAction;
use App\Actions\Task\UpdateTaskAction;
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
    public function index(ListTasksAction $listTasksAction)
    {
        $tasks = $listTasksAction->execute();

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks,
            'queryParams' => !empty(request()->query()) ? request()->query() : null
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(ListProjectsAction $listProjectsAction)
    {
        $projects = $listProjectsAction->execute(false);

        return Inertia::render("Tasks/Create", [
            'projects' => $projects,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request, CreateTaskAction $createTaskAction)
    {
        $createTaskAction->execute($request->validated());

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
    public function edit(Task $task, ListProjectsAction $listProjectsAction)
    {
        $projects = $listProjectsAction->execute(false);

        return Inertia::render('Tasks/Edit', [
            'task' => new TaskResource($task),
            'projects' => $projects
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, Task $task, UpdateTaskAction $updateTaskAction)
    {
        $updateTaskAction->execute($task, $request->validated());

        return to_route('tasks.index')->with('success', "Task \"$task->name\" updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task, DeleteTaskAction $deleteTaskAction)
    {
        $name = $task->name;

        $deleteTaskAction->execute($task);

        return to_route('tasks.index')->with('success', "Task \"$name\" deleted");
    }
}
