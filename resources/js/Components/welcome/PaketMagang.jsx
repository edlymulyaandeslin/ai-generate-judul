import { PAKET_MAGANG } from "@/utils";
import Card from "../Card";
import ContentWrapper from "../ContentWrapper";

export default function PaketMagang() {
    return (
        <ContentWrapper>
            <div className="px-4 py-8">
                <h1 className="text-3xl font-bold text-center lg:text-4xl">
                    Paket Magang
                </h1>

                <div className="pt-8 justify-self-center">
                    <div className="flex flex-wrap gap-8 justify-evenly">
                        {PAKET_MAGANG.map((paket, index) => (
                            <Card key={index} paket={paket} isMagang={true} />
                        ))}
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}
