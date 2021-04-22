import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavbarTop from '../NavbarTop/NavbarTop'
import { Col, Row } from 'react-bootstrap';
import foto from "../../assets/img/foto.jpg";
import "./BasicLayout.scss"
export default function BasicLayout(props) {
    const { children } = props;
    return (
        <div className="fondo">
            <Row>
                <div className="arriba  d-block d-xs-block d-md-none ">

                    <NavbarTop />
                </div>
            </Row>
            <Row xl={12}  >
                <Col xl={3} md={3} sm={3} xs={3} className="izquierda d-none d-xs-none d-md-block">

                    <img src={foto} alt="foto" />
                    <Navbar />
                </Col>
                <Col xl={9} md={9} sm={9} xs={9} className="derecha">
                    {children}
                </Col>
            </Row>

        </div>
    )
}
