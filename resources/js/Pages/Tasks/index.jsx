import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import TasksTable from "./TasksTable";

export default function Index({ auth, tasks }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Tasks
                    </h2>
                    <Link
                        className="py-1 px-3 bg-teal-500 rounded text-white"
                        href={route("tasks.create")}
                    >
                        Add New Task
                    </Link>
                </div>
            }
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <TasksTable tasks={tasks} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
