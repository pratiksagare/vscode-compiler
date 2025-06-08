import { VscFiles, VscAccount, VscSettingsGear, VscSearch, VscGitMerge, VscDebugAlt, VscExtensions } from "react-icons/vsc";

const Sidebar = () => {
    const topIcons = [
        { icon: <VscFiles className="text-white text-2xl m-auto opacity-60" />, active: true, title: "Files" },
        { icon: <VscSearch className="text-white text-2xl m-auto opacity-60" />, active: false, title: "Search" },
        { icon: <VscGitMerge className="text-white text-2xl m-auto opacity-60" />, active: false, title: "Source Control" },
        { icon: <VscDebugAlt className="text-white text-2xl m-auto opacity-60" />, active: false, title: "Run and Debug" },
        { icon: <VscExtensions className="text-white text-2xl m-auto opacity-60" />, active: false, title: "Extensions" },
    ];

    const bottomIcons = [
        { icon: <VscAccount className="text-white text-2xl m-auto opacity-60" />, active: false, title: "Accounts" },
        { icon: <VscSettingsGear className="text-white text-2xl m-auto opacity-60" />, active: false, title: "Settings" },
    ];
    return (
        <div className="flex flex-col justify-between flex-1 gap-2 h-full w-[3rem] bg-[#181818] pt-2 pb-2">
            <div className="flex flex-col gap-1.5 items-center">
                {
                    topIcons && topIcons.map((item, index) => {
                        return (
                            <div key={index} className={`w-full cursor-pointer ${item.active ? 'border-l-[2px] border-sky-500' : ''} ${item.active ? '' : 'opacity-60'} hover:opacity-100`} title={item.title}>
                                <div className="pt-2 pb-2">
                                    {item.icon}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="flex flex-col gap-1.5 items-center">
                {
                    bottomIcons && bottomIcons.map((item, index) => {
                        return (
                            <div key={index} className={`w-full cursor-pointer ${item.active ? 'border-l-[2px] border-sky-500' : ''} ${item.active ? '' : 'opacity-60'} hover:opacity-100`} title={item.title}>
                                <div className="pt-2 pb-2">
                                    {item.icon}
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
};

export default Sidebar;
