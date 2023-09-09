import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Tickets de atendimento de whatsapp",
        content:
            "Revolucione o Atendimento ao Cliente pelo WhatsApp! Nosso sistema CRM com gerenciamento de tickets é a solução definitiva para transformar consultas em conversões.Com uma interface intuitiva, automatização inteligente e análise de dados avançada, oferecemos uma experiência incomparável para sua equipe e seus clientes.Aumente a eficiência do seu atendimento, aumente a satisfação do cliente e impulsione as vendas como nunca antes.Experimente agora e leve seu atendimento pelo WhatsApp para o próximo nível!",
        align: "right",
        image: "/ticket.png"
    },
    {
        id: uuid(),
        title: "Chatbot pesonalizado",
        content:
            "Nossa solução inovadora simplifica o engajamento com os clientes, economizando tempo e recursos preciosos. Descubra como o chatbot pode ser seu melhor aliado na conversão de leads, proporcionando respostas rápidas, direcionando clientes em potencial pelo funil de vendas e impulsionando suas taxas de conversão. Prepare-se para uma revolução no atendimento ao cliente e no crescimento do seu negócio. Experimente agora e veja seus leads se transformarem em clientes satisfeitos",
        align: "left",
        image: "/ticket.png"

    },
    {
        id: uuid(),
        title: "Agendamento de mensagens em massa",
        content:
            "Potencialize sua Comunicação no WhatsApp! Com nosso sistema CRM de agendamento de mensagens em massa, você pode enviar não apenas texto, mas também vídeos, imagens e áudios programados de forma eficiente. Automatize campanhas, promova produtos e serviços, e mantenha seus clientes engajados de forma conveniente e envolvente. Simplifique o processo de comunicação, economize tempo e alcance um público mais amplo com mensagens multimídia. Descubra como nossa solução pode aumentar seu alcance, melhorar seu marketing e impulsionar suas conversões. Experimente agora e eleve sua estratégia de comunicação no WhatsApp para outro patamar!",
        align: "right",
        image: "/ticket.png"

    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
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
                        className={`process-item--content ${item.align === "left"
                            ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                            : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                            } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
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
