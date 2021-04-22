import React from 'react';
import BasicLayout from '../BasicLayout/BasicLayout';
import react from "../../assets/png/react.png"
import nodejs from "../../assets/png/nodejs.png"
import php from "../../assets/png/phpl.png"
import angular from "../../assets/png/angular.png"
import mongodb from "../../assets/png/mongodb.png"
import javascript from "../../assets/png/javascript.png"
import html from "../../assets/png/html5.png"
import golang from "../../assets/png/golang.png"
import java from "../../assets/png/java.png"
import graphql from "../../assets/png/graphql.png"
import sass from "../../assets/png/sass.png"
import git from "../../assets/png/git.png"
import bootstrap from "../../assets/png/bootstrap.png"
import "./Habilidades.scss";



const projects = [
    {
        photo: react,
        text: "Es el que utilizo en todos mis proyectos, es mi framework favorito de Javascript"
    },
    {
        photo: nodejs,
        text: "Se convirtió en mi lenguaje de backend preferido, lo utilizo en mi app de tienda virtual SoDulce!"
    },
    {
        photo: mongodb,
        text: "La base de datos con la que mas disfruto trabajar, presente en todos mis trabajos"
    },
    {
        photo: sass,
        text: "El mejor preprocesador de CSS que he utilizado, imprescindible! "
    },
    {
        photo: bootstrap,
        text: "Una herramienta muy comoda que me facilita las tareas!"
    },
    {
        photo: golang,
        text: "Un muy buen lenguaje de backend, lo he utilizado mucho en mi app de Twintter"
    },
    {
        photo: git,
        text: "Mi compañero de trabajo numero uno!"
    },

    {
        photo: php,
        text: "Otro stack que tambien he utilizado en diversas oportunidades"
    },
];
export default function Habilidades() {
    return (
        <BasicLayout>
            <div className="transparente animate__animated animate__fadeIn">
                <p><strong>Las siguientes herramientas son las que utilizo mas con mayor frecuencia: </strong></p>
            </div>

            <div className="cards">
                {
                    projects.map((image, index) => (
                        <div className="carda">
                            <div className="transparentes  animate__animated animate__fadeIn">
                                <img src={image.photo} alt="" />
                                <p>{image.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </BasicLayout>
    )
}
