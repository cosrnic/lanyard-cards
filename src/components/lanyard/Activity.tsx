import defaultSRC from "@/utils/defaultSRC";
import { FC } from "react";
import { useLanyard } from "react-use-lanyard";
import { LanyardType } from "../../utils/lanyardType";

export const Activity: FC<LanyardType> = ({ id }) => {
    const { status } = useLanyard({ userId: id, socket: true });

    let useThisIndex = 0;
    const getActivity = () => {
        if (
            !status ||
            status.discord_status == "offline" ||
            status.activities == undefined ||
            status.activities[0] == undefined
        ) {
            return (
                <div
                    className={`flex flex-wrap flex-row rounded-md bg-zinc-700 font-sans items-center `}
                >
                    <img
                        src={`/images/discord-default.png`}
                        alt="loading"
                        onError={(e) => defaultSRC(e)}
                        className="flex-row flex m-2 rounded-md h-20 w-20"
                    />
                    <div className="flex flex-col m-2">
                        <p className="font-bold text-xl">
                            User is not playing anything!
                        </p>
                    </div>
                </div>
            );
        } else {
            for (let index = 0; index < status.activities.length; index++) {
                if (status.activities[index].name != "Custom Status") {
                    useThisIndex = index;
                }
            }
            if (status.activities[useThisIndex].name == "Custom Status") {
                return (
                    <div
                        className={`flex flex-wrap flex-row rounded-md bg-zinc-700 font-sans items-center `}
                    >
                        <img
                            src={
                                status.activities[useThisIndex].emoji?.animated
                                    ? `https://cdn.discordapp.com/emojis/${status.activities[0].emoji?.id}.gif`
                                    : `https://cdn.discordapp.com/emojis/${status.activities[0].emoji?.id}.png`
                            }
                            onError={(e) => defaultSRC(e)}
                            alt={status.activities[useThisIndex].name}
                            className="flex-row flex m-2 rounded-md h-20 w-20"
                        />
                        <div className="flex flex-col m-2">
                            <p className="font-bold text-xl">
                                {status.activities[useThisIndex].name}
                            </p>
                            <p>{status.activities[useThisIndex].state}</p>
                        </div>
                    </div>
                );
            }
            return (
                <div
                    className={`flex flex-wrap flex-row rounded-md bg-zinc-700 font-sans items-center `}
                >
                    <img
                        src={
                            status.activities[useThisIndex].assets
                                ? status.activities[useThisIndex].assets
                                      ?.large_image
                                : status.activities[useThisIndex].application_id
                                ? `https://dcdn.dstn.to/app-icons/${status.activities[useThisIndex].application_id}`
                                : `/images/discord-default.png`
                        }
                        onError={(e) => defaultSRC(e)}
                        alt={status.activities[useThisIndex].name}
                        className="flex-row flex m-2 rounded-md h-20 w-20"
                    />
                    <div className="flex flex-col m-2">
                        <p className="font-bold text-xl">
                            {status.activities[useThisIndex].name}
                        </p>
                        <p>{status.activities[useThisIndex].details}</p>
                        <p>{status.activities[useThisIndex].state}</p>
                    </div>
                </div>
            );
        }
    };

    return <div>{getActivity()}</div>;
};
