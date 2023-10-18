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
            className="header  fixed left-0 w-full z-30 top-0 bg-[#000000]"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className=" header-logo--container">
                    <h1 className=" flex justify-center aligm-center text-white logo mb-0">
                        <Link className="flex align-center items-center text-lg font-black" href="/">
                            <Image
                                src="/logo-icon1.png"
                                alt="logo"
                                className="h-9  mr-2"
                                height={40}
                                width={40}
                            />
                            Datapulse
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center mt-1 gap-x-3.5 ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <Link
                            role="button"
                            href="https://wa.me/5563984886628"
                            className="btn bg-datablue text-white hover:bg-datablueSecondary  ml-4"
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
