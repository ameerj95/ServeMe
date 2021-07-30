import React, { useEffect, useState, useRef } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";
import PopUpWaiter from "../../../components/reusables/PopUpWaiter/PopUpWaiter";

function Waiter(props) {
  // console.log("ftvbshanjasnjnasjncsajncasnc" + [...props.orders.list);
  const [modalShow, setModalShow] = useState(false);
  const [shownItem, setshownItem] = useState([]);
  let firstupdate = useRef(true);
  const data = props.foodorders.list;

  //============================================================
  useEffect(() => {
    console.log(firstupdate);
    if (!firstupdate.current) {
      setModalShow(true);
    }
    firstupdate.current = false;
  }, [shownItem]);

  const deleteItem = () => {
    console.log(" changeStatus");
  };

  const handlePopup = (e) => {
    setshownItem(getItemById(e.target.value).order);
  };

  const getItemById = (id) => {
    return data.find((element) => (element.id = id));
  };
  //==============================================================
  return (
    <>
      <PopUpWaiter
        show={modalShow}
        item={shownItem}
        onHide={() => setModalShow(false)}
      />
      <div> Waiter</div>
      <div className="container">
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
            {/* {data.map((item, index) => ( ))} */}
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
export default inject("foodorders")(observer(Waiter));
