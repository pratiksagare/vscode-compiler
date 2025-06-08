import { useContext } from "react";
import { VscChevronUp, VscClose } from "react-icons/vsc"
import { GlobalContext } from "../context/GlobalContext";
const Terminal = () => {
    const { output, setOutput } = useContext(GlobalContext);
    const clearOutput = () => {
        setOutput("");
    }
    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center bg-[#181818] px-2">
                <div className="pb-2">
                    <div className="opacity-60 hover:opacity-85 border-b-2 border-b-[#0098FF] cursor-pointer">
                        <span className="text-white px-0.5 py-0.5 text-sm font-mono ">OUTPUT</span>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4 items-center">
                        <span className="text-white text-sm opacity-60 hover:opacity-85  cursor-pointer"><VscChevronUp /></span>
                        <span className="text-white text-sm opacity-60 hover:opacity-85  cursor-pointer" onClick={clearOutput} title="Clear Output"><VscClose /></span>
                    </div>

                </div>
            </div>
            <pre className="h-full flex-1 textarea-scroll  text-white bg-[#181818] p-4 overflow-y-auto">
                {output}
            </pre >
        </div>
    )
}

export default Terminal

