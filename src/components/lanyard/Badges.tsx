import { Tooltip } from "flowbite-react";
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
                <>
                    <Tooltip
                        content={flag}
                        className="bg-zinc-700"
                        arrow={false}
                        style="dark"
                    >
                        <img src={listBadges[flag]} width={28} />
                    </Tooltip>
                </>
            ))}
        </>
    );
};
