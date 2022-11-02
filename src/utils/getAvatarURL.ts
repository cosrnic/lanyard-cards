import { useLanyard } from "react-use-lanyard";
export const getAvatarURL = (id: string) => {
    const { status } = useLanyard({ userId: id, socket: true });
    if (status == undefined || status.discord_user == undefined)
        return `/images/pfp.png`;
    return `https://cdn.discordapp.com/avatars/${id}/${status?.discord_user.avatar}.png?size=4096`;
};
