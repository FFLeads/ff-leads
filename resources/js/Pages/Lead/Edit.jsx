import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link, useForm} from "@inertiajs/react";
import LeadStatusOptions from "@/Components/LeadStatusOptions.jsx";

export default function Edit({auth, lead, leadStatuses}) {
    const {data, setData, post, errors, reset} = useForm({
        name: lead.name || "",
        email: lead.email || "",
        phone: lead.phone || "",
        lead_status_id: lead.lead_status_id || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("lead.update", lead.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Lead "{lead.name}"
                    </h2>
                </div>
            }
        >
            <Head title="leads"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >


                            <div className="mt-4">
                                <InputLabel htmlFor="lead_name" value="Name"/>

                                <TextInput
                                    id="lead_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("name", e.target.value)}
                                />

                                <InputError message={errors.name} className="mt-2"/>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="lead_email" value="Email"/>

                                <TextInput
                                    id="lead_email"
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("email", e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2"/>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="lead_phone" value="Phone"/>

                                <TextInput
                                    id="lead_phone"
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData("phone", e.target.value)}
                                />

                                <InputError message={errors.phone} className="mt-2"/>
                            </div>


                            <div className="mt-4">
                                <InputLabel htmlFor="lead_status_id" value="Status"/>

                                <SelectInput
                                    name="status"
                                    id="lead_status_id"
                                    className="mt-1 block w-full"
                                    defaultValue={lead.lead_status_id}
                                    onChange={(e) => setData("lead_status_id", e.target.value)}
                                >
                                    <LeadStatusOptions leadStatuses={leadStatuses}/>
                                </SelectInput>

                                <InputError message={errors.lead_status_id} className="mt-2"/>
                            </div>
                            <div className="mt-4 text-right">
                                <Link
                                    href={route("lead.index")}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button
                                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
