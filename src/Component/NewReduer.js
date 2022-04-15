import { useReducer, useState } from "react";

function NewReducer() {
  const [item, setItem] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  let array12 = []
  const handleAdd = (e) => {
    e.preventDefault();
    if (array.length == 0) {
      let newArray = [];
      newArray.push(item);
      setArray(newArray);
    } else {
      console.log(9);
      array.push(item);
      console.log(array);
      // super = []
      // array12 = [...array]
      // array12 = [...array]
      // console.log(array12)
      array.map((item, index)=>{
        // console.log(item)
        array12.push(item)
        console.log(array12)
      })
    }
  };
  console.log(array12)
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>ADD</button>
      {/* <ul>{renderItem()}</ul> */}
    </>
  );
}
export default NewReducer;
