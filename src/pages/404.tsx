import Link from "next/link";

export default function err() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full">
            <h1 className="text-8xl font-black">404</h1>
            <p className="text-xl font-semibold">Page not Found</p>
            <br />
            <br />
            <a
                rel="noreferrer"
                href="/"
                className="bg-lanyard px-12 py-4 rounded-full text-2xl font-bold text-center mt-12 hover:bg-lanyard/70 transition-all duration-100 ease-linear"
            >
                Home
            </a>
        </div>
    );
}
