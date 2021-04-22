import React from 'react'
import { Col, Row } from 'react-bootstrap';
import BasicLayout from '../BasicLayout/BasicLayout';
import "./Sobremi.scss";
export default function Sobremi() {
    return (
        <BasicLayout>
            <div className="sobremi">

                <div className=" transparente animate__animated animate__fadeIn" >
                    <p ><strong>Sobre mi</strong></p>
                    <p>Me considero una persona con gran entusiasmo en el área del desarrollo web, trabajando como programador fullstack.

Aspiro a mejorarme y a poder aplicar mis conocimientos en nuevos proyectos con el objetivo de seguir explotando al máximo mis habilidades técnicas. </p>
                </div>
                <div className=" justify-content-center" >

                    <Row className="transparente animate__animated animate__fadeIn" >
                        <Col  ><p><strong>Nombre:</strong> Cristian Martín Molina</p>
                            <p><strong>Edad: </strong>32 años</p>
                            <p><strong>Nacionalidad: </strong> Argentina</p>
                            <p><strong>Ciudad: </strong>Buenos Aires</p>
                        </Col>
                        <Col><p><strong>Teléfono: </strong>+541127619171</p>
                            <p><strong>Email: </strong>Martinmolina3007@gmail.com</p>
                            <p><strong>Github: </strong></p><a href="https://github.com/martinmolina1988" target="_blank" rel="Github">Github</a>
                        </Col>
                    </Row>



                </div>

            </div>
        </BasicLayout>
    )
}
