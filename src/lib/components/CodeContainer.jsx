import { VscChromeClose, VscPlay } from "react-icons/vsc"
import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"
import { runCode } from "../utils/utils";

const CodeContainer = () => {
    const { languages, selectedLanguage, setSelectedLanguage, setOutput, code, setCode, selectedVersion, setSelectedVersion } = useContext(GlobalContext);
    const handleLanguageChange = (e) => {
        console.log("Language changed:", e.target.value);
        let tempLaungeage = e.target.value;
        const [language, version] = tempLaungeage.split(":");
        setSelectedVersion(version);
        setSelectedLanguage(language);
    }
    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }
    const handleExecuteCode = async () => {
        let res;
        try {
            res = await runCode(code, selectedLanguage, selectedVersion);
            if (res.run.stderr) {
                setOutput(res.run.stderr);
            } else if (res.message) {
                setOutput(res.message);
            } else {
                setOutput(res.run.output);
            }
        } catch (error) {
            setOutput(error.message);
            console.error("Error executing code:", error);
        }
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center bg-[#181818] px-2 pl-0 ">
                <div className="">
                    <div className="flex justify-center items-center gap-6 bg-[#1F1F1F] border-t-2 border-t-[#0098FF] px-2 py-1">
                        <span className="text-white  text-sm  cursor-pointer p-1 ">index</span>
                        <span className="text-white text-sm  cursor-pointer p-1  hover:bg-[#2c2b2b]" ><VscChromeClose /></span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div>
                        <select className="px-2 rounded bg-[#1F1F1F] text-white border border-[#333] outline-none" onChange={handleLanguageChange} value={`${selectedLanguage}:${selectedVersion}`}>
                            <option value=":" disabled>Select Language</option>
                            {languages.map((runtime, index) => (
                                <option key={index} value={runtime.language + ":" + runtime.version}>
                                    {runtime.language + ":" + runtime.version}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex">
                        <button className="text-white text-sm p-1.5 hover:bg-[#2c2b2b] cursor-pointer" onClick={handleExecuteCode} title="run code"><VscPlay /></button>
                    </div>
                </div>
            </div>
            <div className="h-full flex-1   text-white p-4 overflow-y">
                <textarea className="w-full h-full bg-[#1F1F1F] text-white border-none p-2 rounded outline-none textarea-scroll resize-none" value={code} onChange={handleCodeChange} data-gramm="false"
                    data-gramm_editor="false"
                    data-enable-grammarly="false"
                    autoComplete="off" />
            </div>
        </div>
    )
}

export default CodeContainer;
