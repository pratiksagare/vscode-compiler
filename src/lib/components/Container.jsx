import CodeContainer from "./CodeContainer";
import Terminal from "./Terminal";

const Container = () => {
    return (
        <div className="h-full bg-[#1F1F1F]">
            <div className="flex flex-col h-full">
                <div className="h-[65%] w-full bg-[#1F1F1F]">
                    <CodeContainer />
                </div>
                <div className="flex-1 w-full">
                    <Terminal />
                </div>
            </div>

        </div>
    );
};

export default Container;
