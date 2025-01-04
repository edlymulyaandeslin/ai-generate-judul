import { PAKET_SKRIPSI } from "@/utils";
import Card from "../Card";
import ContentWrapper from "../ContentWrapper";

export default function PaketSkripsi() {
    return (
        <ContentWrapper>
            <div className="px-4 py-8">
                <h1 className="text-3xl font-bold text-center lg:text-4xl">
                    Paket Skripsi
                </h1>

                <div className="pt-8 justify-self-center">
                    <div className="flex flex-wrap gap-8 justify-evenly">
                        {PAKET_SKRIPSI.map((paket, index) => (
                            <Card key={index} paket={paket} />
                        ))}
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}
