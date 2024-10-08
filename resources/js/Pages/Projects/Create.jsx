import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        description: "",
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        post(route("projects.store", data));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create New Project
                </h2>
            }
        >
            <Head title="create project" />

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
