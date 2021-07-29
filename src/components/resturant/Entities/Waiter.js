import React, { useEffect, useState, useRef } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";
import PopUpWaiter from "../../../components/reusables/PopUpWaiter/PopUpWaiter";

function Waiter(props) {
  const [modalShow, setModalShow] = useState(false);
  const [shownItem, setshownItem] = useState([]);
  let firstupdate = useRef(true);
  const data = props.orders.list;
  useEffect(() => {
    console.log(firstupdate);
    if (!firstupdate.current) {
      setModalShow(true);
    }
    firstupdate.current = false;
  }, [shownItem]);
  const deleteItem = () => {
    console.log(" finish task  ");
  };
  const handlePopup = (e) => {
    // setshownItem(getItemById(e.target.value).order);
    console.log("handlePopup");
  };
  return (
    <>
      <PopUpWaiter
        show={modalShow}
        item={shownItem}
        onHide={() => setModalShow(false)}
      />
      <div className="container">
        <h2>Waiter</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Station </th>
              <th>Table </th>
              <th> Status</th>
              <th>Order</th>
              <th>Complate</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((item) => ( )} */}
            <tr>
              <td>1</td>
              <td>bar</td>
              <td>5</td>
              <td>READY</td>
              <td>
                <button value="id" onClick={handlePopup}>
                  Show
                </button>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="vehicle1"
                  className="checkbox"
                  onChange={{ deleteItem }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default inject("orders")(observer(Waiter));
