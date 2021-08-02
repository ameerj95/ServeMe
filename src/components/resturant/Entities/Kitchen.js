import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { observer, inject } from "mobx-react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState, useRef } from "react";
import translator from '../../../modules/translator';
import './Kitchen.css'
 
 
const translater = translator()
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
 
 
 
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
 
// console.log("=========================================")
// console.log(JSON.parse(JSON.stringify(data)));
 
function Kitchen(props) {
 
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [shownItem, setshownItem] = useState([]);
  let firstupdate = useRef(true);
  const data = props.foodorders.list;
 
  function beganPrep(event) {
    console.log("in began prep")
    console.log((event.target.id))
    props.clientsocket.socket.emit('kitchen', { item_id: parseInt(event.target.id), action_type: 0 });
    ;
  }
  const finshedMeal = (event) => {
    console.log("in began prep")
    console.log((event.target.id))
    props.clientsocket.socket.emit('kitchen', { item_id: parseInt(event.target.id), action_type: 1  });
    ;
  };
 
  useEffect(() => {
    console.log(firstupdate);
    if (!firstupdate.current) {
      setModalShow(true);
    }
    firstupdate.current = false;
  }, [shownItem]);
 
  const handlePopup = (e) => {
    // setshownItem(getItemById(e.target.value).order_items);
  };
 
  return (
    <div >
      <h3 className="aa">Kitchen</h3>
      {data.map((item, index) =>
        <Accordion  className='shadowLines marginBox' flush >
          <AccordionSummary  
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="summary" >
                <div>Table {item.table}</div>
            </Typography>
 
          </AccordionSummary >
          <hr></hr>
          <Row className='marginBox' >
            <Col className="order_text">Order #{index + 1}, {translater.translateTime(item.date)}</Col>
          </Row>
          <hr></hr>
          <Row className='marginBox'  >
            <Col className="item-table">Dish</Col>
            <Col className="item-table"> Status</Col>
            <Col className="item-table"></Col>
            <Col className="item-table"> </Col>
          </Row>
          {item.order_items.map(element =>
            <AccordionDetails >
              <Typography id="summary">
                <Row className='marginBox' >
                  <Col >{element.name}</Col>
                  <Col >{translater.statusTranslator(element.status)}</Col>
                  <Col  ><button type="button" className="buttonOrders btn btn-warning btn-sm" id={element.id} onClick={beganPrep}>In Process</button></Col>
                  <Col className="date1"> <button type="button" className="buttonOrders btn btn-success btn-sm" id={element.id} onClick={finshedMeal}>Completed</button></Col>
                  </Row>
              </Typography>
            </AccordionDetails>
          )}
        </Accordion>
      )}
    </div>
  );
}
export default inject("foodorders", "clientsocket")(observer(Kitchen));