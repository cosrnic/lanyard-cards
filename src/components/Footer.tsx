export const Footer = () => {
    return (
        <div className="w-full h-16 bottom-0 flex justify-center flex-col items-center p-2 font-bold text-base">
            <p>
                Lanyard by{" "}
                <a
                    className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                    href="https://github.com/Phineas"
                    target="_blank"
                >
                    Phineas
                </a>
            </p>
            <p>
                Website by{" "}
                <a
                    className="text-lanyard hover:underline transition-all duration-300 ease-linear"
                    href="https://github.com/cosrnic"
                    target="_blank"
                >
                    Cosmic
                </a>
            </p>
        </div>
    );
};
