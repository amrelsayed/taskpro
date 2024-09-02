import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, projects, success }) {
    const deleteProject = (project) => {
        if (!window.confirm("Are you sure you want to delete this project?")) {
            return;
        }
        router.delete(route("projects.destroy", project));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Projects
                    </h2>
                    <Link
                        className="py-1 px-3 bg-teal-500 rounded text-white"
                        href={route("projects.create")}
                    >
                        Add New Project
                    </Link>
                </div>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="mb-5 bg-emerald-200 py-3 px-4 text-gray-600 rounded">
                            {success}
                        </div>
                    )}
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
                                        <th
                                            scope="col"
                                            className="px-3 py-2 text-nowrap"
                                        >
                                            Creation Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-2 text-nowrap"
                                        >
                                            Tasks Count
                                        </th>
                                        <th scope="col" className="px-3 py-2">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.data.map((project) => (
                                        <tr
                                            key={project.id}
                                            className="border-b border-neutral-200 dark:border-white/10"
                                        >
                                            <td className="px-3 py-2">
                                                {project.id}
                                            </td>
                                            <td className="px-3 py-2 ">
                                                <Link
                                                    href={route(
                                                        "projects.show",
                                                        project.id
                                                    )}
                                                    className="hover:underline text-violet-600 text-nowrap"
                                                >
                                                    {project.name}
                                                </Link>
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.description}
                                            </td>
                                            <td className="px-3 py-2 text-nowrap">
                                                {project.created_at}
                                            </td>
                                            <td className="px-3 py-2 text-center">
                                                {project.tasksCount}
                                            </td>
                                            <td className="px-3 py-2 text-nowrap">
                                                <Link
                                                    href={route(
                                                        "projects.edit",
                                                        project
                                                    )}
                                                    className="text-blue-500"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteProject(project)
                                                    }
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
                            {projects.meta.total > projects.meta.per_page && (
                                <Pagination links={projects.meta.links} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
