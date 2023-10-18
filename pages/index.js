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
                title="Datapulse - Mais decisões. Melhores análises. Menos tempo."
                description="Potencialize sua empresa com análises de dados extraordinárias! Desbloqueie o poder dos seus dados conosco."
            />
            <div className="main-wrapper text-gray-100 bg-[#101010] relative z-10 pb-20 pt-20 ">
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
                                Quem somos?
                            </PageTitle>
                            <Content className="text-center text-white" alignment="center">
                                <p>
                                    Descubra a excelência em análise de dados com a Datapulse. Somos especialistas gestão
                                    financeira e análise de cliente. Oferecemos insights precisos para potencializar seu sucesso. Na vanguarda
                                    da inovação, garantimos seriedade e integridade em cada análise. Escolha a Datapulse
                                    para uma gestão financeira eficiente e confiável. Seja proativo, alcance o sucesso.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="service" className="feature-tabs text-white">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Mais funcionalidades</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto text-white"
                                type="default"
                            >
                                Serviços
                            </PageTitle>
                            <Content className="text-center text-white" alignment="center">
                                <p>
                                    Descubra a Solução Completa que Seu Negócio Precisa! Nosso sistema CRM oferece todas as funcionalidades essenciais para que sua empresa alcance o sucesso. Desde o agendamento de horários até a gestão de tarefas e análise de dados, nossa plataforma é projetada para atender a todas as suas necessidades. Melhore a eficiência, a satisfação do cliente e maximize o potencial de conversão. Seus clientes vão adorar a experiência aprimorada que você pode oferecer com nosso sistema. Experimente agora e leve seu negócio ao próximo nível com uma solução que todos vão amar!
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 text-white p-12">
                                        <CardImage
                                            src="/note-morelate.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-gray-100 !text-2xl text-white !font-bold">
                                            Kanban (modelo trello)
                                        </CardHeader>
                                        <p>

                                            Organize Tarefas com Facilidade! Nosso sistema CRM oferece uma visão Kanban semelhante ao Trello,
                                            permitindo uma gestão intuitiva de tarefas e projetos. Acompanhe o progresso, defina prioridades
                                            e melhore a eficiência da equipe.
                                            Experimente agora e simplifique seu fluxo de trabalho!
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/note-morelate.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-gray-100 !text-2xl !font-bold">
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
