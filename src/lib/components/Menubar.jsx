import { VscVscode } from "react-icons/vsc";
const Menubar = () => {
    const menuList = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];
    const dots = ["bg-red-500", "bg-yellow-400", "bg-green-500"];
    return (
        <div className="flex justify-between items-center px-2 py-2 bg-[#1F1F1F]">
            <div className="flex gap-1 items-center">
                <VscVscode color="#0098FF" size={20} />
                {
                    menuList && menuList.map((item, index) => {
                        return <span key={index} title={item} className="text-sm text-white opacity-85 font-light p-0.5 px-1.5 rounded-sm hover:bg-[#3E3E42] cursor-pointer">{item}</span>
                    })
                }
            </div>
            <div className="flex gap-1.5 justify-items-center items-center">
                {
                    dots && dots.map((item, index) => {
                        return <div className={`w-3 h-3 rounded-full ${item} cursor-pointer`} key={index}></div>
                    })
                }
            </div>
        </div>
    )
}

export default Menubar
