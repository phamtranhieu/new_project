import { useState, useReducer } from "react";

function Reducer() {
  const [itemJob, setItemJob] = useState("");
  const [idItem, setId] = useState("");
  let initial = {
    job: "",
    jobs: [],
  };

  const SET_JOB = "set_job";
  const ADD_JOB = "add_job";
  const DELETE_JOB = "delete_job";

  const reducer = (state, action) => {
    console.log(action);
    console.log(itemJob);
    console.log(state);

    switch (action) {
      case ADD_JOB:
        return {
          ...state,
          jobs: [...state.jobs, itemJob],
        };
      case DELETE_JOB:
        state["jobs"].splice(idItem, 1);
        console.log(state)

        // console.log(state['jobs'].splice(idItem, 1));

        return {
          ...state,
        };
      default:
        return {};
    }
  };

  const [count, dispath] = useReducer(reducer, initial);
  console.log(count);
  const { job, jobs } = count;
  console.log(jobs);
  const handleChange = (e) => {
    setItemJob(e.target.value);
  };
  // console.log(itemJob)
  const handleAdd = () => {
    dispath(ADD_JOB);
  };

  const handleDelete = (e) => {
    setId(e.target.id);
    dispath(DELETE_JOB);
  };

  const renderItem = () => {
    if (jobs.length > 0) {
      return jobs.map((item, index) => {
        return (
          <>
            <li>{item}</li>
            <button id={index} onClick={handleDelete}>
              Delete
            </button>
          </>
        );
      });
    }
  };
  return (
    <>
      {/* {count} */}
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>ADD</button>
      <p className="para">pahmtran</p>
      {/* <button onClick={handleDelete}>DELETE</button> */}
      <ul>{renderItem()}</ul>

      {/* <button onClick={handleDeduct}>Deduct</button> */}
      {/* <ul>{renderList()}</ul> */}
    </>
  );
}
export default Reducer;
