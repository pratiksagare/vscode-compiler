import { useContext } from "react";
import { Layout } from "./Layout";
import { GlobalContext } from "./lib/context/GlobalContext";

export default function App() {
  const { GlobalContextProvider } = useContext(GlobalContext)
  return (
    <Layout />
  )
}