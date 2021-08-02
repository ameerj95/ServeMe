import React from "react";
import { useState } from "react";
import axios from "axios";
import "./QR.css";
const QR = () => {
  const [tableNum, setTableNum] = useState("");
  const [listQR, setListQR] = useState([{ table_num: 1, qr_code: "" }]);
  const [stafflistQR, setStaffListQR] = useState({});

  const handleChange = (event) => {
    setTableNum(event.target.value);
  };

  const generateQR = async () => {
    let newList = await axios(`http://localhost:5000/QR/generate/${tableNum}`);
    setListQR(newList.data);
  };
  const generateQRStaff = async () => {
    let newList = await axios(`http://localhost:5000/QR/generateStaff`);
    console.log(newList.data);
    setStaffListQR(newList.data);
  };

  return (
    <div className="qrsession">
      <button
        className="btn btn-lg btn-outline-danger ml-4"
        onClick={generateQR}
      >
        QR's for Tables
      </button>
      {}
      <input
        id="inputnums"
        className="numTables"
        type="text"
        value={tableNum}
        onChange={handleChange}
        placeholder="Insert number of tables"
      />
      <br></br>
      <button
        id="btn1"
        className="btn btn-lg btn-outline-danger ml-4"
        onClick={generateQRStaff}
      >
        QR's for Staff
      </button>

      <h3>Tables QR's</h3>
      {listQR.map((table) => (
        <div className="TableQr">
          <div>
            <h2> Table {table.table_num}</h2>

            <img className="imgqr" src={table.qr_code} alt="BigCo Inc. logo" />
          </div>
        </div>
      ))}

      <br></br>
      <h2> Staff-QR's</h2>
      {Object.keys(stafflistQR).map((link) => (
        <div className="StaffQR">
          <h2>{link}</h2>{" "}
          <img
            className="imgqr"
            src={stafflistQR[link].qr}
            alt="BigCo Inc. logo"
          />
        </div>
      ))}
    </div>
  );
};

export default QR;
