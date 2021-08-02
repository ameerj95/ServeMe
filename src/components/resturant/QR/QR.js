import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./QR.css";
import { MDBInput } from "mdbreact";
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
        Generate QR for Tables
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
        className="btn btn-lg btn-outline-danger ml-4"
        onClick={generateQRStaff}
      >
        Generate QR for Staff
      </button>

      <h2>Tables QR's</h2>
      {listQR.map((table) => (
        <div className="TableQr">
          <div>
            <h1> Table {table.table_num}</h1>
            {/* alt="BigCo Inc. logo"  */}

            <img className="imgqr" src={table.qr_code} alt="BigCo Inc. logo" />
          </div>
        </div>
      ))}

      <br></br>
      <h2> Staff-QR's</h2>
      {Object.keys(stafflistQR).map((link) => (
        <div className="StaffQR">
          <h5>{link}</h5>{" "}
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
