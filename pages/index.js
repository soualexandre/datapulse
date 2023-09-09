import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Datapulse - Com Dados Poderosos, Construímos Relações Fortalecidas e Negócios de Sucesso! 🚀"
                description="Discover NutriTrack, Com Dados Poderosos, Construímos Relações Fortalecidas e Negócios de Sucesso!"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Potencialize a Proximidade
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Somos uma empresa de análise de dados CRM com um sistema CRM próprio.
                                    Nosso foco é criar relações humanizadas entre empresas e seus clientes.
                                    Nossa plataforma personalizada transforma dados em conexões genuínas,
                                    capacitando as empresas a compreenderem melhor seus clientes e a oferecerem
                                    experiências excepcionais em todos os momentos.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Mais funcionalidades</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Tudo o que você precisa para cativar o seu cliente
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Descubra a Solução Completa que Seu Negócio Precisa! Nosso sistema CRM oferece todas as funcionalidades essenciais para que sua empresa alcance o sucesso. Desde o agendamento de horários até a gestão de tarefas e análise de dados, nossa plataforma é projetada para atender a todas as suas necessidades. Melhore a eficiência, a satisfação do cliente e maximize o potencial de conversão. Seus clientes vão adorar a experiência aprimorada que você pode oferecer com nosso sistema. Experimente agora e leve seu negócio ao próximo nível com uma solução que todos vão amar!
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/ticket.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Kanban (modelo trello)
                                        </CardHeader>
                                        <p>

                                            "Organize Tarefas com Facilidade! Nosso sistema CRM oferece uma visão Kanban semelhante ao Trello,
                                            permitindo uma gestão intuitiva de tarefas e projetos. Acompanhe o progresso, defina prioridades
                                            e melhore a eficiência da equipe.
                                            Experimente agora e simplifique seu fluxo de trabalho!
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/ticket.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Horário de atendimento
                                        </CardHeader>
                                        <p>
                                            Controle seus horários de atendimento com facilidade!
                                            Nosso sistema CRM permite personalizar agendas, definir disponibilidade
                                            e oferecer atendimento de qualidade.
                                            Otimize a eficiência e experimente agora para melhorar seu atendimento!
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our customers have to say about
                                this template
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Perguntas recorrentes sobre o nosso sistema{" "}
                                <br></br>

                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
