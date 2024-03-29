import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container  wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                </MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mt-8 text-4x mx-auto" type="heavy">
                        Transformamos dados em decisões através do BI.
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center text-gray-200" alignment="center">
                        <p>
                            Mais decisões. Melhores análises. Menos tempo.
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button
                                className="hover:bg-dataGreen mr-2 hover:text-white"
                                href="https://wa.me/5563984886628"
                                target="_blank" r
                                el="noopener noreferrer">
                                Agendar reunião
                            </Button>

                            <a
                                role="button"
                                target="_blank" rel="noopener noreferrer"
                                href="https://forms.gle/BVj9PbTK2vHEvihy7"
                                className="btn bg-datablue text-white hover:bg-datablueSecondary lemonsqueezy-button"
                            >
                                Receba uma propsta
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="/note-home.png"
                            width={1933}
                            height={700}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
