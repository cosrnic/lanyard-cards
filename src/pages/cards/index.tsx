import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getAvatarURL } from "@/utils/getAvatarURL";
import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards: NextPage = () => {
    const [value, setValue] = useState("");
    const notify = (input?: string) =>
        toast.error(input ?? "An error occured!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
    function handle() {
        if (value == "") {
            notify("Discord ID must be entered!");
            return;
        }
        if (value.length < 15) {
            notify("Discord ID must be longer than 15 Characters!");
            return;
        }
        Router.push({
            pathname: `/cards/${value}`,
        });
    }
    return (
        <div className="w-full h-screen ">
            <Head>
                <title>Lanyard Cards</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={getAvatarURL("508662064063971348")}
                />
            </Head>
            <Navbar />
            <div className="h-screen">
                <div className="flex flex-col justify-center items-center h-[90%]">
                    <p className="text-lanyard text-6xl font-black text-center">
                        Lanyard Cards
                    </p>
                    <p className="text-3xl font-bold pt-4">
                        a{" "}
                        <a
                            href="https://github.com/Phineas/lanyard"
                            target="_blank"
                            className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                        >
                            Lanyard
                        </a>{" "}
                        card generator
                    </p>
                    <div className="gap-2 items-center flex mt-8">
                        <input
                            className="bg-lanyard rounded-md outline-none p-2 w-64 h-11 focus:border-white border-2 border-transparent transition-all duration-100 ease-linear font-bold"
                            placeholder="Enter Discord ID"
                            onChange={(e) => {
                                setValue(e.target.value);
                            }}
                        />
                        <button
                            className="text-xl bg-lanyard rounded-md p-2 hover:bg-lanyard/70 transition-all duration-100 ease-linear"
                            onClick={handle}
                        >
                            Generate
                        </button>
                    </div>

                    <div className="flex flex-row p-4 mt-24 gap-4">
                        <Card id="508662064063971348" />
                    </div>
                </div>

                <Footer />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </div>
    );
};

export default Cards;