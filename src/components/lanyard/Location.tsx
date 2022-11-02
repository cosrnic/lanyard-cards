import { FC } from "react";
import { useLanyard } from "react-use-lanyard";
import { LanyardType } from "../../utils/lanyardType";

export const Location: FC<LanyardType> = ({ id }) => {
    const { status } = useLanyard({ userId: id, socket: true });
    function defaultSRC(e: any) {
        e.target.src = "/images/discord-default.png";
    }
    const getLocation = () => {
        if (!status || !status.kv?.location) {
            return <></>;
        } else {
            if (status.kv.location == "UK" || status.kv.location == "united kingdom" || status.kv.location == "great britain") {
                return (
                    <h1 className="font-sans antialiased font-semibold text-lg text-center align-center ">
                        <img
                            className="rounded-md align-center mx-auto"
                            src={`https://countryflagsapi.com/png/gb`}
                            height="50"
                            width="50"
                            alt={status.kv.location}
                        />
                        {status.kv.location}
                    </h1>
                );
            }
            return (
                <h1 className="font-sans antialiased font-semibold text-lg text-center align-center">
                    <img
                        className="rounded-md align-center mx-auto"
                        src={`https://countryflagsapi.com/png/${status.kv.location}`}
                        height="50"
                        width="50"
                        alt={status.kv.location}
                        onError={(e) => defaultSRC(e)}
                    />
                    {status.kv.location}
                </h1>
            );
        }
    };

    return <div>{getLocation()}</div>;
};
