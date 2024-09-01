import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, projects }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

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
                                            Creation Date
                                        </th>
                                        <th scope="col" className="px-3 py-2">
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
                                            <td className="px-3 py-2">
                                                {project.name}
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.description}
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.created_at}
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.tasksCount}
                                            </td>
                                            <td className="px-3 py-2">
                                                <Link
                                                    preserveScroll
                                                    href={route(
                                                        "projects.edit",
                                                        project.id
                                                    )}
                                                    className="text-blue-500"
                                                >
                                                    Edit
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "projects.destroy",
                                                        project.id
                                                    )}
                                                    className="ml-2 text-red-500"
                                                >
                                                    Delete
                                                </Link>
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
