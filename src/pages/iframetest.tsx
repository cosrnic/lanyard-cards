import { Card } from "@/components/Card";
import { NextPage } from "next";

const iframeCard: NextPage = () => {
    return (
        <div className="m-2">
            <iframe
                src="http://localhost:3000/cards/iframe/508662064063971348"
                width="420px"
                height="375px"
            ></iframe>
        </div>
    );
};

export default iframeCard;
