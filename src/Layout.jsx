import Menubar from "./lib/components/Menubar";
import Sidebar from "./lib/components/Sidebar";
import Container from "./lib/components/Container";

export const Layout = () => {
    return (
        <div>
            <div className="w-full hidden md:flex min-w-[450px] overflow-y h-screen flex flex-col bg-[#181818] text-white">
                <Menubar />
                <div className="flex-1 flex">
                    <div className="bg-[#181818] border-r border-[#3C3C3C]">
                        <Sidebar />
                    </div>
                    <div className="flex-1 h-full">
                        <Container />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center md:hidden w-full px-4 h-screen bg-[#181818] text-white">
                <span className="font-mono">
                    This application is best viewed on a desktop or laptop. Please switch to a larger screen for optimal experience.
                </span>
            </div>
        </div>
    );
};
