import { Avatar } from "./lanyard/Avatar";
import { Name } from "./lanyard/Name";
import { Activity } from "./lanyard/Activity";
import { Location } from "./lanyard/Location";
import { FC } from "react";
import { LanyardType } from "../utils/lanyardType";
import { useLanyard } from "react-use-lanyard";
import { Navbar } from "./Navbar";

export const Card: FC<LanyardType> = ({ id, colour }) => {
    const { status } = useLanyard({ userId: id, socket: true });

    if (!status) {
        return (
            <div className="flex flex-col justify-center items-center h-screen w-full">
                <h1 className="text-4xl font-black">Loading...</h1>
            </div>
        );
    }

    if (!status.discord_user) {
        return (
            <div className="flex flex-col justify-center items-center h-screen w-full">
                <h1 className="text-8xl font-black">404</h1>
                <p className="text-xl font-semibold">Card not Found</p>
                <p className="text-lg font-semibold">
                    Make sure to follow{" "}
                    <a
                        className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                        href="../#how-to-use"
                    >
                        these steps
                    </a>
                    .
                </p>
                <a
                    href="/"
                    className="bg-lanyard px-12 py-4 rounded-full text-2xl font-bold text-center mt-12 hover:bg-lanyard/70 transition-all duration-100 ease-linear"
                >
                    Home
                </a>
            </div>
        );
    } else {
        // colours to pass into Avatar.tsx and border
        let colour;
        if (status.discord_status == "online") colour = "green";
        if (status.discord_status == "offline") colour = "gray";
        if (status.discord_status == "idle") colour = "yellow";
        if (status.discord_status == "dnd") colour = "red";

        // TODO: Badges
        // let flags: string[] = getFlags(status.discord_user.public_flags);
        return (
            <div className="grid place-items-center ">
                {/* appears white if this isn't done for some reason */}
                <div className="border-red-500 shadow-red-500"></div>
                <div className="border-green-500 shadow-green-500"></div>
                <div className="border-gray-500 shadow-gray-500"></div>
                <div className="border-yellow-500 shadow-yellow-500"></div>
                <div className="min-w-[19rem]">
                    <div
                        className={`grid-4 p-5 min-h-[13rem] border-2 border-${colour}-500 bg-zinc-800 rounded-md  transition-all shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)]`}
                    >
                        <div className="flex flex-col">
                            <div className="flex flex-col gap-2">
                                <div className="flex place-content-between">
                                    <div className="flex flex-row ml-2  items-center space-x-4 mb-2">
                                        <div className="inline-block relative h-16">
                                            <Avatar id={id} colour={colour} />
                                        </div>
                                        <div className="">
                                            <Name id={id} />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Location id={id} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <div
                                            className={`flex flex-wrap flex-row rounded-md bg-zinc-700 font-sans items-center w-full`}
                                        >
                                            <Activity id={id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="text-lg bg-zinc-700 p-2 rounded-md hover:bg-zinc-600 mt-4 text-center"
                                href={`https://discord.com/users/${id}`}
                                target="_blank"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
