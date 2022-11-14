import { Card } from "@/components/Card";
import { NextPage } from "next";
import { useRouter } from "next/router";

const iframeCard: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    if (id == undefined) {
        return <></>;
    }
    return (
        <div className="">
            <Card id={id.toString()} />
            <a
                className="p-2 absolute bottom-0 w-full text-center rounded-md hover:underline transition-all duration-300 ease-linear bg-transparent"
                href="https://lanyard-cards.cosrnic.uk"
                rel="noreferrer"
                target="_blank"
            >
                Made with <span className="text-lanyard">Lanyard Cards</span>
            </a>
        </div>
    );
};

export default iframeCard;
