import { UserContext } from "../../userContext";
import React, { useContext } from "react";

function Main() {
  const data = useContext(UserContext);
  if (data) {
      data['getdata'](23)
      data['getID'](11111)
  }
  return <>Main</>;
}
export default Main;
