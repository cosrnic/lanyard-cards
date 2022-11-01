import { FC } from "react";
import { useLanyard } from "react-use-lanyard";
import { LanyardType } from "../../utils/lanyardType";

export const Name: FC<LanyardType> = ({ id }) => {
    const { status } = useLanyard({ userId: id, socket: true });

    const getName = () => {
        if (!status || !status.discord_user) {
            return (
                <h1 className="font-sans antialiased font-semibold text-lg ">
                    loading
                    <span className="text-gray-400">#loading</span>
                </h1>
            );
        } else {
            return (
                <div className="font-sans  flex flex-col">
                    <h1 className="font-semibold text-lg">
                        {status.discord_user.username}
                    </h1>
                    <h2 className="text-gray-400 text-base font-medium">
                        #{status.discord_user.discriminator}
                    </h2>
                </div>
            );
        }
    };

    return <div>{getName()}</div>;
};
