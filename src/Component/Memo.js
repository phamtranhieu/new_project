import { useReducer, useMemo, useState } from "react";

function Memo(params) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inputs, setInputs] = useState([]);
  const [total, setTotal] = useState(0);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleClick = () => {
    setInputs([
      ...inputs,
      {
        name: name,
        price: price,
      },
    ]);
  };
  console.log(inputs);
  let sum = 0;
  const renderItem = () => {
    if (inputs.length > 0) {
      return inputs.map((item, index) => {
        sum = sum + parseInt(item["price"]);
        console.log(sum);
        getTotal(sum);
        return (
          <li>
            {item["name"]} - {item["price"]}
          </li>
        );
      });
    }
  };
  const getTotal = (payload) => {
    setTotal(payload);
  };

  const totalSum = inputs.map((item, index) => {
    let sum = 0;
    let a = sum + parseInt(item["price"]);
    return a;
  });

  const handleTotal = () => {
    let sum = 0;
    return inputs.map((item, index) => {
      return sum + parseInt(item["price"]);
    });
  };

  //   const total = inputs.map((item, index) => {
  //     sum = sum + parseInt(item["price"]);
  //     console.log(sum)
  //   });
  //   const result = useMemo(() => {
  //     let sum = 0;

  //     const total = inputs.map((item, index) => {
  //       sum = sum + parseInt(item["price"]);
  //       r
  //     });
  //     return total;
  //   });
  //   console.log(result);
  return (
    <>
      {total}
      <input name="name" type="text" onChange={handleChangeName} />
      <input name="price" type="text" onChange={handleChangePrice} />
      <button onClick={handleClick}>ADD</button>
      <ul>{renderItem()}</ul>
    </>
  );
}
export default Memo;
