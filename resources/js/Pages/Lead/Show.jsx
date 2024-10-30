import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";

export default function Show({auth, lead, leadStatus}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {`Lead: "${lead.name}"`}
                    </h2>
                    <Link
                        href={route("lead.edit", lead.id)}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`lead "${lead.name}"`}/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">ID</label>
                                        <p className="mt-1">{lead.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Name</label>
                                        <p className="mt-1">{lead.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Email</label>
                                        <p className="mt-1">{lead.email}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Phone</label>
                                        <p className="mt-1">{lead.phone}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Status</label>
                                        <p className="mt-1">
                                            <p className="mt-1">{leadStatus}</p>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Created Date</label>
                                        <p className="mt-1">{lead.created_at}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Updated Date</label>
                                        <p className="mt-1">{lead.updated_at}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
