import Pagination from "@/Components/Pagination";
import { STATUS, STATUS_COLORS_CLASS } from "@/Constatns";
import { Link, router } from "@inertiajs/react";

export default function TasksTable({ tasks }) {
    const deleteTask = (task) => {
        if (!window.confirm("Are you sure you want to delete this task?")) {
            return;
        }
        router.delete(route("tasks.destroy", task));
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <table className="min-w-full text-left text-sm font-light text-surface">
                            <thead className="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                                <tr>
                                    <th scope="col" className="px-3 py-2">
                                        #
                                    </th>
                                    <th scope="col" className="px-3 py-2">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-2">
                                        Description
                                    </th>
                                    <th scope="col" className="px-3 py-2">
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-2 text-nowrap"
                                    >
                                        Creation Date
                                    </th>
                                    <th scope="col" className="px-3 py-2">
                                        Project
                                    </th>
                                    <th scope="col" className="px-3 py-2">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.data.map((task) => (
                                    <tr
                                        key={task.id}
                                        className="border-b border-neutral-200 dark:border-white/10"
                                    >
                                        <td className="px-3 py-2">{task.id}</td>
                                        <td className="px-3 py-2">
                                            {task.name}
                                        </td>
                                        <td className="px-3 py-2">
                                            {task.description}
                                        </td>
                                        <td className="px-3 py-2">
                                            <span
                                                className={
                                                    "px-3 py-1 rounded text-white " +
                                                    STATUS_COLORS_CLASS[
                                                        task.status
                                                    ]
                                                }
                                            >
                                                {STATUS[task.status]}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">
                                            {task.created_at}
                                        </td>
                                        <td className="px-3 py-2">
                                            {task.project.name}
                                        </td>
                                        <td className="px-3 py-2 text-nowrap">
                                            <Link
                                                preserveScroll
                                                href={route(
                                                    "tasks.edit",
                                                    task.id
                                                )}
                                                className="text-blue-500"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() => deleteTask(task)}
                                                className="ml-2 text-red-500"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* render pagination only if we have more than 1 page */}
                        {tasks.meta.total > tasks.meta.per_page && (
                            <Pagination links={tasks.meta.links} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
