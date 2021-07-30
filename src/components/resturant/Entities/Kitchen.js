



import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { observer, inject } from "mobx-react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState, useRef } from "react";
import './Kitchen.css'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: '10px'


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

  const changeStatus = () => {
    console.log(" changeStatus");
  };

  const handlePopup = (e) => {
    // setshownItem(getItemById(e.target.value).order_items);
  };

  return (
    <div >
      <h3 className="center">Kitchen</h3>
      <Row>
        <Col className="item-table"  >#</Col>
        <Col className="item-table"  >#</Col>
        <Col className="item-table"  >Table</Col>
        <Col className="item-table"  >Status</Col>
        <Col className="item-table"  >Data</Col>
      </Row>
      {data.map((item, index) =>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="tt">
              <Container >
                <Row >
                  <Col className="col-lg-2">{index + 1}</Col>
                  <Col className="col-lg-2">{item.table}</Col>
                  <Col className=" col-lg-3">{item.status}</Col>
                  <Col className="date">{item.date}</Col>

                </Row>
              </Container>
            </Typography>

          </AccordionSummary>
          <Row >
            <Col className="item-table">Name main</Col>
            <Col className="item-table"> Order status</Col>
            <Col className="item-table"> In Process </Col>
            <Col className="date1 item-table">Completed</Col>
          </Row>
          {item.order_items.map(element =>
            <AccordionDetails >
              <Typography id="ty">
                <Row>
                  <Col >{element.name}</Col>
                  <Col >{element.status}</Col>
                  <Col  ><button type="button" className="btn btn-outline-warning btn-sm" id={element.id} onClick={beganPrep}>In Process</button></Col>
                  <Col className="date1"> <button type="button" className="btn btn-outline-success btn-sm" id={element.id} onClick={beganPrep}>Completed</button></Col>
                </Row>
              </Typography>
            </AccordionDetails>
          )}
          <Row>
            <Col ><button id={item.id} type="button" className=" btn btn-outline-primary btn-sm mb-2 center">Finsh Order</button></Col>
          </Row>
        </Accordion>
      )}
    </div>
  );
}
export default inject("foodorders", "clientsocket")(observer(Kitchen));

