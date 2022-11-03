import { FC } from "react";
import { useLanyard } from "react-use-lanyard";
import { LanyardType } from "../../utils/lanyardType";
import { getFlags } from "./flags/getFlags";
import { listBadges } from "./flags/listBadges";

export const Badges: FC<LanyardType> = ({ id }) => {
    const { status } = useLanyard({ userId: id, socket: true });
    if (!status || !status.discord_user) {
        return <></>;
    }
    let flags: string[] = getFlags(status.discord_user.public_flags);

    if (id == "508662064063971348") {
        flags.push("Cosmic's Globe");
    }
    if (id == "94490510688792576") {
        flags.push("Lanyard Dev");
    }

    return (
        <>
            {flags.map((flag) => (
                <div key={flag}>
                    <div className="group flex relative">
                        <img src={listBadges[flag]} width={28} />
                        <div
                            className="group-hover:opacity-100 transition-opacity bg-zinc-700 px-2 py-1 text-sm text-white rounded-md absolute left-1/2 
    -translate-x-1/2 -translate-y-[150%] opacity-0 m-4 mx-auto text-center"
                        >
                            {flag}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
