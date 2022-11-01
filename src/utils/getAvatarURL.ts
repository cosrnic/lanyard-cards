import { useLanyard } from "react-use-lanyard";
export const getAvatarURL = (id: string) => {
    const { status } = useLanyard({ userId: id, socket: true });
    return `https://cdn.discordapp.com/avatars/${id}/${status?.discord_user.avatar}.png?size=4096`;
};
