import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header  fixed left-0 w-full z-30 top-0 bg-black-1000"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/logo-text-white.svg"
                                alt="logo"
                                className="h-8"
                                height={400}
                                width={20}
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center mt-1 gap-x-3.5 ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <Link
                            role="button"
                            href="/"
                            className="btn btn--secondary lemonsqueezy-button ml-4"
                        >
                            Fale conosco
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </Link>

                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
