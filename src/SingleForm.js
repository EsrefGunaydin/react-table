import React, { useState } from "react";

const SingleForm = ({ counter, styles, inputStyles, deleteRow, editRow }) => {
  //State
  const [state, setState] = useState({
    date: "",
    name: "",
    amount: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} style={{ margin: "0 auto" }}>
        <tr key={counter}>
          <td style={styles}>
            <input style={inputStyles} name="date" type="date" onChange={onChangeHandler} />
          </td>
          <td style={styles}>
            <input style={inputStyles} name="name" type="text" onChange={onChangeHandler} />
          </td>
          <td style={styles}>
            <input style={inputStyles} name="amount" type="number" onChange={onChangeHandler} />
          </td>
          <td onClick={deleteRow}>
            <button>X</button>
          </td>
          <td onClick={editRow}>
            {" "}
            <button>Edit</button>
          </td>
          <td>
            <button type="submit">Submit</button>
          </td>
        </tr>
      </form>
      <p>Message</p>
    </div>
  );
};

export default SingleForm;
