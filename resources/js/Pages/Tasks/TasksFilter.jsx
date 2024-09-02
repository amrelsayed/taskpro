import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { DONE, INPROGRESS, INREVIEW, STATUS, TESTING, TODO } from "@/Constatns";
import { router } from "@inertiajs/react";

export default function TasksFilter({ queryParams }) {
    queryParams = queryParams || {};

    const searchHandler = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        console.log(queryParams);
        router.get(route("tasks.index", queryParams));
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchHandler(name, e.target.value);
    };
    return (
        <div className="mt-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <TextInput
                                    defaultValue={queryParams.name}
                                    onBlur={(e) =>
                                        searchHandler("name", e.target.value)
                                    }
                                    onKeyPress={(e) => onKeyPress("name", e)}
                                    placeholder="Search by task name"
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div>
                                <SelectInput
                                    defaultValue={queryParams.status}
                                    onChange={(e) =>
                                        searchHandler("status", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                >
                                    <option>Filter by Status</option>
                                    <option value={TODO}>{STATUS[TODO]}</option>
                                    <option value={INPROGRESS}>
                                        {STATUS[INPROGRESS]}
                                    </option>
                                    <option value={INREVIEW}>
                                        {STATUS[INREVIEW]}
                                    </option>
                                    <option value={TESTING}>
                                        {STATUS[TESTING]}
                                    </option>
                                    <option value={DONE}>{STATUS[DONE]}</option>
                                </SelectInput>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
