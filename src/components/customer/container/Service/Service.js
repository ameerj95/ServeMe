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

    //  Napkins Baby-Chair Clear-Table Sauces <div>Utensils</div> Ask waiter Problem Take Check
    
    return (
        <>
            <h5 className='title d-flex justify-content-center mt-3 mb-3'>Fast Service</h5>

            <PopUpOption show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Container fluid className="mm">
                <Row className=" mt-4 mb-2 ">
                    <Col ><span id="www"><GiCash className="btn-serve" onClick={serviceRquest}/></span></Col>
                    <Col onClick={() => setModalShow(true)}><span id="www"><FaUtensils className="btn-serve" /></span></Col>
                    <Col ><span id="www"><GiPapers className="btn-serve" id={4} onClick={serviceRquest}/></span></Col>
                </Row>
                <Row className="mt-4 mb-2">
                    <Col><span id="www1"><GiWoodenChair className="btn-serve" id={5} onClick={serviceRquest}/></span></Col>
                    <Col><span id="www1"><GiSoap className="btn-serve" id={6} onClick={serviceRquest}/></span></Col>
                    <Col><span id="www1"><GiBrandyBottle className="btn-serve" id={7} onClick={serviceRquest}/></span></Col>
                </Row>
                <Row className="mt-4 mb-2">
                    <Col><span id="www2"><GiTakeMyMoney className="btn-serve" id={8} onClick={serviceRquest}/></span><span className="iconGroup3">Take Check</span></Col>
                    <Col><span id="www2"> <MdSyncProblem className="btn-serve" id={9} onClick={serviceRquest}/></span></Col>
                    <Col><span id="www2"><FaQuestion className="btn-serve" id={10} onClick={serviceRquest}/></span></Col>
                </Row>
            </Container>
        </>
    )
}

export default inject("clientsocket","table")(observer(Service))
