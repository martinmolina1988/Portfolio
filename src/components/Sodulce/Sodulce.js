import React from 'react';
import ImageGallery from 'react-image-gallery';
import BasicLayout from '../BasicLayout/BasicLayout';

import sodulce1 from "../../assets/img/sodulce1.png";
import sodulce2 from "../../assets/img/sodulce2.png";
import sodulce3 from "../../assets/img/sodulce3.PNG";
import sodulce4 from "../../assets/img/sodulce4.PNG";
import "./Sodulce.scss";


const images = [
    {
        original: sodulce1,
        thumbnail: sodulce1,
    },
    {
        original: sodulce2,
        thumbnail: sodulce2,
    },
    {
        original: sodulce3,
        thumbnail: sodulce3,
    },
    {
        original: sodulce4,
        thumbnail: sodulce4,
    },
];

export default function Sodulce() {
    return (
        <BasicLayout>
            <div className="transparente animate__animated animate__fadeIn">
                <p className="center"><strong>SoDulce!</strong></p>
                <p><strong>Tecnologías utilizadas: </strong></p>
                <p><strong>Frontend:</strong>  React, Bootstrap 4, Sass.</p>
                <p><strong>Backend:</strong>  Nodejs, MongoDB, Cloudinary, Stripe.</p>
            </div>

            <div className="galeria">

                <ImageGallery
                    sizes="500px"
                    items={images} />
            </div>
            <div className="transparente animate__animated animate__fadeIn">

                <div className="mt-2"><a href="https://sodulce-shop.netlify.app//" target="_blank">Ir a SoDulce!</a></div>
                <div className="mt-2">   <a href="https://github.com/martinmolina1988/sodulce-shop" target="_blank">Codigo del Frontend realizado React y Cloudinary</a></div>


                <div className="mt-2">   <a target="_blank" href="https://github.com/martinmolina1988/sodulce-server">Codigo del servidor con NodeJS</a></div>
                <div className="mt-2"> <a target="_blank" href="https://github.com/martinmolina1988/node-stripe-server">Codigo de Stripe con NodeJS!</a></div>

                <p className="center mt-2"> <strong> Descripción </strong> </p>

                <p>SoDulce! Es una tienda virtual en el que se pueden subir los productos que quieran, tienen sus imágenes alojadas en Cloudinary, y sus productos almacenados en MongoDB, lo cual cada producto se pueden editar y eliminar, también tiene su carrito de compras para poder pagar mediante el sistema de pagos Stripe y además una sección de contacto donde el cliente puede enviarle cualquier consulta mediante WhatsApp
</p>
            </div>
        </BasicLayout >
    )
}
