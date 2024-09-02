import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { DONE, INPROGRESS, INREVIEW, STATUS, TESTING, TODO } from "@/Constatns";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ auth, task, projects }) {
    const { data, setData, patch, errors, reset } = useForm({
        name: task.name,
        description: task.description,
        status: task.status,
        project_id: task.project.id,
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        patch(route("tasks.update", task.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Task "{task.name}"
                </h2>
            }
        >
            <Head title="create task" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form
                                onSubmit={onSubmitHandler}
                                className="p-4 sm:p-8"
                            >
                                <div>
                                    <InputLabel value="Name: " htmlFor="name" />
                                    <TextInput
                                        name="name"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        value="Description: "
                                        htmlFor="description"
                                    />
                                    <TextArea
                                        name="description"
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full"
                                    ></TextArea>
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        value="Status: "
                                        htmlFor="status"
                                    />
                                    <SelectInput
                                        id="status"
                                        name="status"
                                        value={task.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="mt-1 block w-full"
                                    >
                                        <option>Select Status</option>
                                        <option value={TODO}>
                                            {STATUS[TODO]}
                                        </option>
                                        <option value={INPROGRESS}>
                                            {STATUS[INPROGRESS]}
                                        </option>
                                        <option value={INREVIEW}>
                                            {STATUS[INREVIEW]}
                                        </option>
                                        <option value={TESTING}>
                                            {STATUS[TESTING]}
                                        </option>
                                        <option value={DONE}>
                                            {STATUS[DONE]}
                                        </option>
                                    </SelectInput>
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        value="Project: "
                                        htmlFor="project_id"
                                    />
                                    <SelectInput
                                        id="project_id"
                                        name="project_id"
                                        value={task.project.id}
                                        onChange={(e) =>
                                            setData(
                                                "project_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 block w-full"
                                    >
                                        <option>Select Project</option>
                                        {projects.data.map((project) => (
                                            <option
                                                key={project.id}
                                                value={project.id}
                                            >
                                                {project.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.project_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4 text-right">
                                    <SecondaryButton
                                        onClick={() => window.history.back()}
                                        className="mr-2"
                                    >
                                        Cancel
                                    </SecondaryButton>
                                    <PrimaryButton type="submit">
                                        Save
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
