
import { observer, inject } from "mobx-react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState, useRef } from "react";
import './Kitchen.css'
import translator from '../../../modules/translator';
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




function WaiterTemp(props) {

  const data = props.waiterorder.tables;
  console.log(JSON.parse(JSON.stringify(data)));

  const takeTask = (event) => {
    console.log("in began takeTask")
    console.log((event.target.id))
    props.clientsocket.socket.emit('waiterServer', { id: parseInt(event.target.id), action_type: 0 });
    ;
  }

  const finshTask = (event) => {
    console.log("in began finshTask")
    console.log((event.target.id))
    props.clientsocket.socket.emit('waiterServer', { id: parseInt(event.target.id), action_type: 1 });
    ;
  }

  const finshOrder = (event) =>{
    console.log("in finshOrder")
    console.log((event.target.id))
    props.clientsocket.socket.emit('waiterServer', { id: parseInt(event.target.id), action_type: 2 });
    ;
  }
  

  return (
    <div>
      <h3 className="aa">Waiter</h3>
      {Object.keys(data).map(table =>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography id="summary">
              <Container >
                <Row >
                  <Col >Table {table}</Col>
                </Row>
              </Container>
            </Typography>

          </AccordionSummary>
          <Row >
            <Col className="item-table">Name main</Col>
            <Col className="item-table">Status</Col>
            <Col className="date1 item-table">Completed</Col>
          </Row>
          {data[table].map(order =>
              <Row id={order.id} >
                <Col><div>{props.waiterorder.translator_values(order)}</div></Col>
                <Col><div>{translater.statusTranslator(order.status)}</div></Col>
                <Col  ><button type="button" className="buttonOrders btn btn-success btn-sm" id={order.id} onClick={finshTask}>Take Task</button></Col>
                  
              </Row>
          )}
            <Row>
            <Col className="aa" ><button id={table} onClick={finshOrder} type="button" className="btn btn-outline-primary btn-sm">Finsh Order</button></Col>
          </Row>
        </Accordion>
      )}

    </div>

  );
}
export default inject("waiterorder", "clientsocket")(observer(WaiterTemp));
