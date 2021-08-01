import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const QR = () => {
    const [tableNum, setTableNum] = useState('')
    const [listQR, setListQR] = useState([{ table_num: 1, qr_code: "" }])

    const handleChange = (event) => {
        setTableNum(event.target.value)
    }

    const generateQR = async () => {
        let newList = await axios(`http://localhost:5000/QR/generate/${tableNum}`)
        setListQR(newList.data)
    }

    return (
        <div>
            <button onClick={generateQR}>Generate QR for Tables</button>
            <input type="text" value={tableNum} onChange={handleChange} />
            <div>qr mapping</div>
            {listQR.map(table => <div>
                <h1>{table.table_num}</h1>
                <img src={table.qr_code} alt="BigCo Inc. logo"/>
                </div>)}
        </div>
    );
};

export default QR;