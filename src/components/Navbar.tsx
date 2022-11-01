export const Navbar = () => {
    return (
        <div className="w-full h-16 bg-lanyard flex justify-between flex-row items-center fixed">
            <a
                href="/"
                className="p-2 m-2 text-xl font-bold bg-lanyard rounded-full hover:bg-lanyard hover:text-white hover:border-white text-white border-2 border-transparent transition-all duration-100 ease-linear"
            >
                Lanyard Cards
            </a>
            <a
                href="/cards"
                className="p-2 m-2 text-xl font-bold bg-white rounded-full hover:bg-lanyard hover:text-white hover:border-white text-lanyard border-2 border-transparent transition-all duration-100 ease-linear"
            >
                Create a Card
            </a>
        </div>
    );
};
