import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAvatarURL } from "@/utils/getAvatarURL";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useLanyard } from "react-use-lanyard";

const Cards: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const cosmicID = "508662064063971348";
    if (id == undefined) {
        return <></>;
    }
    const { status } = useLanyard({ userId: id, socket: true });
    const { status: status2 } = useLanyard({ userId: cosmicID, socket: true });
    const [data, setData] = useState<any | null>(null);

    // useEffect(() => {
    //     async function fetchData(id: string) {
    //         await axios
    //             .get("https://dcdn.dstn.to/profile/" + id)
    //             .then((result) => {
    //                 return setData(result.data);
    //             });
    //     }
    //     fetchData(id.toString());
    // }, [id]);

    // if (data == null) {
    //     return <></>;
    // }
    return (
        <div className="w-full h-screen ">
            <Head>
                {status ? (
                    status.discord_user ? (
                        <title>
                            {status.discord_user.username}'s Card | Lanyard
                            Cards
                        </title>
                    ) : (
                        <title>Lanyard Cards</title>
                    )
                ) : (
                    <title>Lanyard Cards</title>
                )}
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={
                        status && status2
                            ? status.discord_user && status2.discord_user
                                ? `https://cdn.discordapp.com/avatars/${id}/${status.discord_user.avatar}.png?size=4096`
                                : `https://cdn.discordapp.com/avatars/${cosmicID}/${status2.discord_user.avatar}.png?size=4096`
                            : ``
                    }
                />
                <meta
                    property="og:title"
                    content={
                        status && status2
                            ? status.discord_user && status2.discord_user
                                ? `${status.discord_user.username}'s card | Lanyard Cards`
                                : `${status2.discord_user.username}'s card | Lanyard Cards`
                            : ``
                    }
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://cards.cosrnic.uk" />
                <meta
                    property="og:image"
                    content={getAvatarURL(id.toString())}
                />
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
                    <Card id={id.toString()} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Cards;
