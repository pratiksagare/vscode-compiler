import { createContext, useEffect, useState } from "react";
import { getRunTimeEnv } from "../utils/utils";

export const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedVersion, setSelectedVersion] = useState("");
    const [output, setOutput] = useState("");
    const [code, setCode] = useState("");
    useEffect(() => {
        getRunTimeEnv().then((data) => {
            setLanguages(data);
        }).catch((error) => {
            console.error('Error fetching runtime environments:', error);
        });
    }, []);
    return (
        <GlobalContext.Provider value={{ languages, setLanguages, selectedLanguage, setSelectedLanguage, output, setOutput, code, setCode, selectedVersion, setSelectedVersion }}>
            {children}
        </GlobalContext.Provider>
    );

}