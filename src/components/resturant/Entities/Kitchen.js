import React, { useEffect, useState, useRef } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";
import PopUpOrder from "../../../components/reusables/PopUpOrder/PopUpOrder";

function Kitchen(props) {
  // console.log("ftvbshanjasnjnasjncsajncasnc" + [...props.orders.list);
  const [modalShow, setModalShow] = useState(false);
  const [shownItem, setshownItem] = useState([]);
  let firstupdate = useRef(true);
  const data = props.foodorders.list;
  console.log(data);
  const changeStatus = () => {
    console.log(" changeStatus");
  };

  function beganPrep(event) {
    console.log("in began prep")
    console.log((event.target.id))
    props.clientsocket.socket.emit('kitchen', { item_id: parseInt(event.target.id), action_type: 0 });
    ;
  }

  useEffect(() => {
    console.log(firstupdate);
    if (!firstupdate.current) {
      setModalShow(true);
    }
    firstupdate.current = false;
  }, [shownItem]);

  const handlePopup = (e) => {
    setshownItem(getItemById(e.target.value).order_items);
  };

 
  console.log("=========================================")
  console.log(JSON.parse(JSON.stringify(data)));
  return (
    <>
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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.table}</td>
                <td>
                  {item.order_items.map(element => 
                    <div>
                    <span>{element.name} </span>
                    <span>{element.status} </span>
                    <button id={element.id} onClick={beganPrep}>X</button>
                  </div>
                  )}
                </td>
                <td>{item.status}</td>
                <td>{item.date}</td>
                <td>
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
export default inject("foodorders", "clientsocket")(observer(Kitchen));
