import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TasksTable from "../Tasks/TasksTable";

export default function Show({ auth, project, tasks }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Project{" "}
                    <span className="text-violet-600">{project.name}</span>
                </h2>
            }
        >
            <Head title={project.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-2 gpa-1">
                                <div>
                                    <div>
                                        <strong>ID: </strong> {project.id}
                                    </div>
                                    <p className="mt-2">
                                        <strong>Name: </strong> {project.name}
                                    </p>
                                    <p className="mt-2">
                                        <strong>Number of Tasks: </strong>{" "}
                                        {project.tasksCount}
                                    </p>
                                    <p className="mt-2">
                                        <strong>Creation date: </strong>{" "}
                                        {project.created_at}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <strong>Description: </strong>{" "}
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-0 pb-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="mb-2 text-lg">Tasks:</h2>

                            <TasksTable tasks={tasks} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
