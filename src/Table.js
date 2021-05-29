import React, { useState, useEffect } from "react";
import SingleForm from "./SingleForm";

const Table = () => {
  //pseudo database
  const dataTable = [
    { date: "2015-03-25", name: "someone", amount: 200 },
    { date: "2018-04-25", name: "bankofamerica", amount: 300 },
    { date: "2019-03-25", name: "creditcard", amount: 100 },
  ];

  const [counter, setCounter] = useState(1);
  const [editable, setEditable] = useState(false);

  const styles = {
    width: "150px",
    height: "30px",
    border: "1px solid lightblue",
  };

  const inputStyles = {
    borderStyle: "hidden",
    height: "30px",
    fontSize: "1.2rem",
  };

  const addRow = (e) => {
    setCounter(counter + 1);
    setRows([
      ...rows,
      <SingleForm
        counter={counter}
        styles={styles}
        inputStyles={inputStyles}
        editable={editable}
        deleteRow={deleteRow}
        editRow={editRow}
      />,
    ]);
  };

  const deleteRow = (e) => {
    console.log(rows);
  };

  const editRow = () => {
    setEditable(!editable);
  };

  //   const allList = dataTable.map((item, id) => {
  //     return (
  //       <SingleForm
  //         submitHandler={submitHandler}
  //         onChangeHandler={onChangeHandler}
  //         counter={counter}
  //         styles={styles}
  //         inputStyles={inputStyles}
  //         editable={editable}
  //         deleteRow={deleteRow}
  //         editRow={editRow}
  //         state={state}
  //       />
  //     );
  //   });

  const [rows, setRows] = useState([
    <SingleForm
      counter={counter}
      styles={styles}
      inputStyles={inputStyles}
      editable={editable}
      deleteRow={deleteRow}
      editRow={editRow}
    />,
  ]);

  return (
    <div>
      <button onClick={addRow}>Add Row</button>
      <table style={{ margin: "20px auto" }}>
        <div>
          <thead style={{ margin: "20px auto" }}>
            <tr>
              <th style={styles}>Date</th>
              <th style={styles}>Merchant Name</th>
              <th style={styles}>Amount</th>
              <th style={styles}>Delete Row</th>
            </tr>
          </thead>
        </div>
        <tbody style={{ margin: "20px auto" }}>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
