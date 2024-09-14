import { createContext, useState } from "react";
import './App.css';
import MobileHeader from "./components/mobileSize/MobileHeader";
export const DataContext = createContext<{
  data: Idata[];
  setData: Function;
} | null>(null);
interface Idata {
  id: number;
  taskName: string | number;
  priority: string;
  status: string;
  deadline: number;
  taskDetails: string | number;
}
function App() {
  const [data, setData] = useState<Idata[]>([
    // {
    //   id: 1,
    //   taskName: "test1",
    //   priority: "high",
    //   status: "doing",
    //   deadline: 4,
    //   taskDetails: "dfssf",
    // },
    // {
    //   id: 2,
    //   taskName: "test2",
    //   priority: "low",
    //   status: "to do",
    //   deadline: 10,
    //   taskDetails: "dfssf",
    // },
    // {
    //   id: 2,
    //   taskName: "test3",
    //   priority: "medium",
    //   status: "done",
    //   deadline: 1,
    //   taskDetails: "dfssf",
    // },
  ]);
  return (
    <DataContext.Provider value={{ data, setData }}>
    <div className="App">
        <div className="mobile-header invisible w-full h-[50px]  md:hidden ">
           <MobileHeader />
        </div>
        <div className="mobile-header w-full h-[50px] fixed top-0 z-[1]  md:hidden">
            <MobileHeader />
        </div>
        <p>hiiiiii</p>
    </div>
    </DataContext.Provider>
  );
}

export default App;
