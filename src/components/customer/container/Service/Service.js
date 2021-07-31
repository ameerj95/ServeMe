import React,{useState} from 'react';
import { observer, inject } from 'mobx-react'
import PopUpOption from '../../../reusables/PopUpOption/PopUpOption';
import { GiCash, GiPapers, GiWoodenChair, GiTakeMyMoney, GiSoap, GiBrandyBottle } from "react-icons/gi";
import { FaUtensils ,FaQuestion } from "react-icons/fa";
import { MdSyncProblem } from 'react-icons/md';
import {  Col, Row, Container } from 'react-bootstrap'
import './Service.css'
function Service(props) {
    const [modalShow, setModalShow] = useState(false);

    const serviceRquest = (event)=>{
        console.log("hello")
        console.log(event.currentTarget.id)
        const extracted_tableNum = props.table.tableNum
        props.clientsocket.socket.emit('customerServer', { tableNum: extracted_tableNum,order_type:event.target.id ,action_type:2 ,notes:"" });
    }

    
    return (
        <>
            <PopUpOption show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Container fluid>
                <Row className="mt-4 m-1 mb-2">
                    <Col ><GiCash className="btn-serv" id={2} onClick={serviceRquest}/><div  >Give Check</div></Col>
                    <Col onClick={() => setModalShow(true)}><FaUtensils className="btn-serv" /><div>Utensils</div></Col>
                    <Col ><GiPapers className="btn-serv" id={4} onClick={serviceRquest}/><div>Napkins</div></Col>
                </Row>
                <Row className="mt-4 m-1 mb-2 ce">
                    <Col><GiWoodenChair className="btn-serv" id={5} onClick={serviceRquest}/><div >Baby Chair</div></Col>
                    <Col><GiSoap className="btn-serv" id={6} onClick={serviceRquest}/><div  >Clear Table</div></Col>
                    <Col><GiBrandyBottle className="btn-serv" id={7} onClick={serviceRquest}/><div>Sauces</div></Col>
                </Row>
                <Row className="mt-4 mb-2">
                    <Col><GiTakeMyMoney className="btn-serv" id={8} onClick={serviceRquest}/><div>Take Check</div></Col>
                    <Col> <MdSyncProblem className="btn-serv" id={9} onClick={serviceRquest}/><div >Problem</div></Col>
                    <Col><FaQuestion className="btn-serv" id={10} onClick={serviceRquest}/><div >Ask waiter</div></Col>
                </Row>
            </Container>
        </>
    )
}

export default inject("clientsocket","table")(observer(Service))
