import logo from "./logo.svg";
import "./App.css";
import "./A"
import NewComponent from "./Component/NewComponent";
import { UserContext } from "./userContext";
import Footer from "./Component/Layout/Footer";
import Main from "./Component/Layout/Main";
import Header from "./Component/Layout/Header";
import { useState } from "react";
import Reducer from "./Component/Reducer";
import Memo from "./Component/Memo";
import NewReduer from "./Component/NewReduer";
function App() {
  // const [dataItem, setDataItem] = useState();
  // const [dataItemId, setDataId] = useState()
  // const getdata = (data) => {
  //   setDataItem(data)
  // };

  // const getID = (dataID) => {
  //   setDataId(dataID)
  // };
  return (
    <>
      {/* <Reducer /> */}
      {/* <Memo /> */}
      <Reducer />

      {/* <UserContext.Provider value={{ getdata: getdata, getID: getID }}>
        <Header name={dataItem} id={dataItemId}/>
        <Main />
        <Footer />
      </UserContext.Provider> */}
    </>
  );
}

export default App;
