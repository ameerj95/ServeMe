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
    return (
        <>
            <PopUpOption show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Container fluid>
                <Row className="mt-4 m-1 mb-2">
                    <Col ><GiCash className="btn-serv" /><div>Give Check</div></Col>
                    <Col onClick={() => setModalShow(true)}><FaUtensils className="btn-serv" /><div>Utensils</div></Col>
                    <Col ><GiPapers className="btn-serv" /><div>Napkins</div></Col>
                </Row>
                <Row className="mt-4 m-1 mb-2 ce">
                    <Col><GiWoodenChair className="btn-serv" /><div>Baby Chair</div></Col>
                    <Col><GiSoap className="btn-serv" /><div>Clear Table</div></Col>
                    <Col><GiBrandyBottle className="btn-serv" /><div>Sauces</div></Col>
                </Row>
                <Row className="mt-4 mb-2">
                    <Col><GiTakeMyMoney className="btn-serv" /><div>Take Check</div></Col>
                    <Col> <MdSyncProblem className="btn-serv" /><div>Problem</div></Col>
                    <Col><FaQuestion className="btn-serv" /><div>Ask waiter</div></Col>
                </Row>
            </Container>
        </>
    )
}

export default inject("menu")(observer(Service))
