import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAvatarURL } from "@/utils/getAvatarURL";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
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
