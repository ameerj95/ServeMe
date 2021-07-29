import React, { useEffect, useState, useRef } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";
import PopUpOrder from "../../../components/reusables/PopUpOrder/PopUpOrder";

function Kitchen(props) {
  // console.log("ftvbshanjasnjnasjncsajncasnc" + [...props.orders.list);
  const [modalShow, setModalShow] = useState(false);
  const [shownItem, setshownItem] = useState([]);
  let firstupdate = useRef(true);
  const data = props.orders.list;
  console.log(data);
  const changeStatus = () => {
    console.log(" changeStatus");
  };

  useEffect(() => {
    console.log(firstupdate);
    if (!firstupdate.current) {
      setModalShow(true);
    }
    firstupdate.current = false;
  }, [shownItem]);

  const handlePopup = (e) => {
    console.log("in popup");
    console.log(e.target.value);
    setshownItem(e.target.value);
  };
  return (
    <>
      <PopUpOrder
        show={modalShow}
        item={shownItem}
        onHide={() => setModalShow(false)}
      />
      <div> Kitchen</div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Table</th>
              <th>Order</th>
              <th>status</th>
              <th>Data</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.table}</td>
                <td>
                  <button value={item.order} onClick={handlePopup}>
                    Show
                  </button>
                </td>
                <td>{item.status}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={changeStatus}> change status</button>
                  <button onClick={changeStatus}> pickup</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default inject("orders")(observer(Kitchen));
// key={item.id}
