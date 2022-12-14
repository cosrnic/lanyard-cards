import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAvatarURL } from "@/utils/getAvatarURL";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Card } from "../components/Card";

const Home: NextPage = () => {
    const id = "508662064063971348";
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }

    return (
        <div className="w-full h-screen ">
            <Head>
                <title>Lanyard Cards</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/pfp.png"
                />
                <meta property="og:title" content="Lanyard Cards" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://cards.cosrnic.uk" />
                <meta property="og:image" content="/images/pfp.png" />
                <meta
                    property="og:description"
                    content="Lanyard by Phineas, Website by Cosmic"
                />
                <meta name="theme-color" content="#D7BB87" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar />
            <div className="h-screen ">
                <div className="flex flex-col justify-center items-center h-[90%]">
                    <div className="animate-fade-in-down">
                        <p className="text-lanyard text-6xl font-black text-center ">
                            Lanyard Cards
                        </p>
                        <p className="text-3xl font-bold pt-4">
                            a{" "}
                            <a
                                rel="noreferrer"
                                href="https://github.com/Phineas/lanyard"
                                target="_blank"
                                className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                            >
                                Lanyard
                            </a>{" "}
                            card generator
                        </p>
                    </div>
                    <a
                        rel="noreferrer"
                        href="/cards"
                        className="m-8 p-4 text-xl font-bold bg-lanyard rounded-full hover:bg-lanyard/70"
                    >
                        Generate a Card
                    </a>
                </div>
                <div className="w-full flex flex-col justify-center items-center ">
                    <a
                        rel="noreferrer"
                        href="#what-it-looks-like"
                        className="flex bottom-4 p-2 px-4 bg-lanyard hover:bg-lanyard/70 transition-all duration-100 ease-linear text-white text-center font-bold rounded-full items-center"
                    >
                        <AiOutlineArrowDown size={36} />
                        What it looks like
                    </a>
                </div>
            </div>
            <div className="h-screen " id="what-it-looks-like">
                <div className="flex justify-center items-center flex-col h-[90%]">
                    <p className="text-4xl p-4">What it looks like</p>
                    <Card id={id} />
                    <p className="italic">updates in real time</p>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <a
                        rel="noreferrer"
                        href="#how-to-use"
                        className="flex bottom-4 p-2 px-4 bg-lanyard hover:bg-lanyard/70 transition-all duration-100 ease-linear text-white text-center font-bold rounded-full items-center"
                    >
                        <AiOutlineArrowDown size={36} />
                        How to use it
                    </a>
                </div>
            </div>
            <div className="h-screen mt-20" id="how-to-use">
                <div className="flex justify-center items-center flex-col h-[90%]">
                    <p className="text-4xl p-4 text-center">How to use it</p>
                    <div className="text-lg font-medium text-center">
                        Firstly, Join the{" "}
                        <a
                            rel="noreferrer"
                            className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                            target="_blank"
                            href="https://discord.gg/lanyard "
                        >
                            Lanyard Discord
                        </a>{" "}
                        server.
                    </div>
                    <p className="text-lg font-medium text-center">
                        Secondly,{" "}
                        <a
                            rel="noreferrer"
                            href="/cards"
                            className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                        >
                            click here
                        </a>{" "}
                        and enter your Discord ID in the box.
                    </p>
                    <p className="text-4xl p-4 mt-8 text-center">
                        Want your Country to appear?
                    </p>
                    <p className="text-lg font-medium text-center">
                        In the{" "}
                        <a
                            rel="noreferrer"
                            className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                            target="_blank"
                            href="https://discord.gg/lanyard "
                        >
                            Lanyard Discord
                        </a>{" "}
                        go to{" "}
                        <code className="bg-zinc-900 p-1 rounded-md text-lanyard">
                            #kv-commands
                        </code>{" "}
                        and type{" "}
                        <code className="bg-zinc-900 p-1 rounded-md text-lanyard">
                            .set location (country)
                        </code>{" "}
                    </p>
                    <p className="text-lg font-medium text-center">
                        The website will automatically update with the country's
                        name and flag!
                    </p>
                    <p className="text-2xl font-bold text-center mt-4">
                        More KV's will be supported in the future.
                    </p>
                    <p className="text-4xl p-4 mt-8 text-center">
                        Want to embed this onto your website?
                    </p>
                    <p className="text-lg font-medium text-center">
                        The url for the iFrame is <br />
                        <code className="bg-zinc-900 p-1 rounded-md text-lanyard">
                            https://lanyard-cards.cosrnic.uk/cards/iframe/(id)
                        </code>{" "}
                        <br />
                        The recommended settings for the iFrame are <br />
                        <code className="bg-zinc-900 p-1 rounded-md text-lanyard">
                            {"<iframe "}
                            src="https://lanyard-cards.cosrnic.uk/cards/iframe/(id)"
                            width="420px" height="375px"
                            {" />"}
                        </code>
                    </p>
                    <p className="text-4xl p-4 mt-8 text-center">
                        Need help? Contact me on Discord{" "}
                    </p>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <a
                        rel="noreferrer"
                        href="#what-s-coming"
                        className="flex bottom-4 p-2 px-4  lg:mt-0 bg-lanyard hover:bg-lanyard/70 transition-all duration-100 ease-linear text-white text-center font-bold rounded-full items-center"
                    >
                        <AiOutlineArrowDown size={36} />
                        What's Coming
                    </a>
                </div>
            </div>

            <div className="h-screen mt-20" id="what-s-coming">
                <div className="flex justify-center items-center flex-col h-[90%]">
                    <p className="text-4xl p-4 text-center">What's Coming</p>
                    <p className="text-lg font-medium text-center">
                        <p className="text-xl font-bold">
                            So far, I have these features planned;
                        </p>
                        <br />
                        <p className="line-through">Badges</p>
                        <p className="line-through">
                            Accent Colours/Banner Colours
                        </p>
                        <p className="line-through">iFrame</p>
                        <p>Connected Accounts</p>
                        <p>About Me/Bio</p>
                        <p>Spotify [now playing + duration of song]</p>
                    </p>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <a
                        rel="noreferrer"
                        href="#"
                        className="flex bottom-4 p-2 px-4  lg:mt-0 bg-lanyard hover:bg-lanyard/70 transition-all duration-100 ease-linear text-white text-center font-bold rounded-full items-center"
                    >
                        <AiOutlineArrowUp size={36} />
                        To the Top
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
