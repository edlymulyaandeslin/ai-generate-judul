import ContentWrapper from "@/Components/ContentWrapper";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <MainLayout>
            <ContentWrapper>
                <Head title="Profile" />

                <div className="py-12">
                    <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                        <div className="p-4 bg-white shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="p-4 bg-white shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="p-4 bg-white shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}
