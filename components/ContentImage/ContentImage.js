import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Nossa missão",
        content:
            "Na Datapulse, nossa missão é capacitar pessoas e empresas por meio da inteligência de dados. Buscamos não apenas compreender os desafios específicos de cada cliente, mas também promover o desenvolvimento contínuo de nossos colaboradores. Ao alavancar análises de dados personalizadas, estamos empenhados em criar soluções que não apenas atendam às necessidades empresariais, mas também impulsionem o crescimento individual e coletivo.",
        align: "right",
        image: "/note-morelate.png"
    },
    {
        id: uuid(),
        title: "Nossa visão",
        content:
            "Nossa visão na Datapulse é ser a força motriz por trás do sucesso sustentável de empresas em todo o mundo, onde a expertise em análise de dados se entrelaça harmoniosamente com a promoção do potencial humano. Visualizamos um futuro em que cada tomada de decisão empresarial seja informada por insights precisos e cada colaborador alcance seu máximo potencial. Ao equilibrar a excelência em análise de dados com um compromisso inabalável com as pessoas, aspiramos ser líderes globais em capacitar empresas a atingir suas missões.",
        align: "left",
        image: "/note-morelate.png"

    },
    {
        id: uuid(),
        title: "Valorizamos",
        content:
            "Excelência em Dados e Pessoas: Inovação Sustentável: Parcerias de Confiança:Crescimento Colaborativo:Adaptação Contínua",
        align: "right",
        image: "/note-morelate.png"

    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 text-white space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container text-white grid md:grid-cols-2 py-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${item.align === "left" ? "md:order-1" : ""
                            }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content text-white ${item.align === "left"
                            ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                            : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                            } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-white">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3 py-8">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense text-white font-light"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
