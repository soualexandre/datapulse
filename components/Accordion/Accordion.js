import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "Como o sistema de agendamento de horários pode beneficiar minha empresa?",
        isOpen: true,
        content:
            " Nosso sistema permite que você organize e gerencie os horários de atendimento de forma eficaz, evitando sobrecargas e garantindo que seus clientes recebam atenção quando mais precisam. Isso melhora a eficiência, a satisfação do cliente e ajuda a maximizar o potencial de conversão"
    },
    {
        id: uuid(),
        title: "É fácil personalizar minha agenda de atendimento com esse sistema?",
        isOpen: false,
        content:
            " Sim, nossa plataforma é projetada para simplificar a personalização da agenda. Você pode facilmente definir horários de disponibilidade e inatividade de acordo com suas necessidades, garantindo que sua equipe esteja pronta para atender os clientes nos momentos ideais."
    },
    {
        id: uuid(),
        title: "Como o sistema ajuda a evitar conflitos de horários e sobrecarga da equipe?",
        isOpen: false,
        content: "Nosso sistema possui recursos de gestão que evitam conflitos de horários e sobrecarga da equipe. Ele alerta sobre horários sobrepostos e permite que você distribua tarefas de forma equilibrada, garantindo que cada membro da equipe tenha uma carga de trabalho gerenciável."
    },
    {
        id: uuid(),
        title: " O sistema é compatível com outras ferramentas de CRM que minha empresa já utiliza?",
        isOpen: false,
        content:
            "Sim, nosso sistema é projetado para integração fácil e flexível com outras ferramentas de CRM. Isso permite que você mantenha seus dados centralizados e garante uma experiência de atendimento ainda mais eficaz e integrada para seus clientes."
    },
    {
        id: uuid(),
        title: "Como posso acompanhar o desempenho do atendimento com esse sistema?",
        isOpen: false,
        content:
            " Nosso sistema fornece análises detalhadas sobre o desempenho do atendimento, incluindo métricas de tempo de resposta, eficiência da equipe e satisfação do cliente. Isso ajuda você a identificar áreas de melhoria e aprimorar constantemente seu atendimento."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
