import Menubar from "./lib/components/Menubar";
import Sidebar from "./lib/components/Sidebar";
import Container from "./lib/components/Container";

export const Layout = () => {
    return (
        <div className="w-full min-w-[450px] overflow-y h-screen flex flex-col bg-[#181818] text-white">
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
    );
};
