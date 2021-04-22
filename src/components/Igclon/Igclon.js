import React from 'react';
import ImageGallery from 'react-image-gallery';
import BasicLayout from '../BasicLayout/BasicLayout';

import igclon1 from "../../assets/img/igclon1.png";
import igclon2 from "../../assets/img/igclon2.png";
import igclon3 from "../../assets/img/igclon3.png";
import igclon4 from "../../assets/img/igclon4.png";
import "./Igclon.scss";


const images = [
    {
        original: igclon1,
        thumbnail: igclon1,
    },
    {
        original: igclon2,
        thumbnail: igclon2,
    },
    {
        original: igclon3,
        thumbnail: igclon3,
    },
    {
        original: igclon4,
        thumbnail: igclon4,
    },
];

export default function Igclon() {
    return (
        <BasicLayout>
            <div className="transparente animate__animated animate__fadeIn">
                <p className="center"><strong>igclon!</strong></p>
                <p><strong>Tecnologías utilizadas: </strong></p>
                <p><strong>Frontend:</strong>  React, Semantic UI, Sass.</p>
                <p><strong>Backend:</strong>  Nodejs, MongoDB, Cloudinary, Graph QL.</p>
            </div>

            <div className="galeria">

                <ImageGallery
                    sizes="500px"
                    items={images} />
            </div>
            <div className="transparente animate__animated animate__fadeIn">

                <div className="mt-2"><a href="https://igclon.netlify.app/" target="_blank">Ir a Igclon!</a></div>
                <div className="mt-2">   <a href="https://github.com/martinmolina1988/igclon" target="_blank">Codigo del Frontend realizado React, Semantic, Sass y Cloudinary</a></div>


                <div className="mt-2">   <a target="_blank" href="https://github.com/martinmolina1988/igclon-server">Codigo del servidor con NodeJS, MongoDB y GraphQL</a></div>

                <p className="center mt-2"> <strong> Descripción </strong> </p>

                <p>Como su nombre lo dice, es un clon del famoso Instagram, en donde podrás subir tus imágenes, buscar usuarios en su panel de búsqueda y seguirlos, podrás dar likes y comentar las publicaciones que los distintos usuarios suban!</p>
            </div>
        </BasicLayout >
    )
}
