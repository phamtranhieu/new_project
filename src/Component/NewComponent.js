import React, { useContext } from "react";
import { UserContext } from "../userContext";


function NewComponent() {
  const user = useContext(UserContext)
  console.log(user)
  return <>hahahaha</>;
}
export default NewComponent;
