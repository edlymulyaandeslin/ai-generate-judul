import ContentWrapper from "@/Components/ContentWrapper";
import Card from "@/Components/credits/Card";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Index({ credits }) {
    return (
        <MainLayout>
            <Head title="Credits" />

            <ContentWrapper>
                <div className="flex gap-4 justify-center items-center flex-wrap">
                    {credits.map((credit, index) => (
                        <Card credit={credit} key={index} />
                    ))}
                </div>
            </ContentWrapper>
        </MainLayout>
    );
}
