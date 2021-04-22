import React from 'react';
import ImageGallery from 'react-image-gallery';
import BasicLayout from '../BasicLayout/BasicLayout';
import twintter0 from "../../assets/img/twintter0.png";
import twintter1 from "../../assets/img/twintter1.PNG";
import twintter2 from "../../assets/img/twintter2.PNG";
import twintter3 from "../../assets/img/twintter3.PNG";
import sodulce1 from "../../assets/img/sodulce1.png";
import sodulce2 from "../../assets/img/sodulce2.png";
import sodulce3 from "../../assets/img/sodulce3.PNG";
import sodulce4 from "../../assets/img/sodulce4.PNG";
import "./Proyectos.scss";


const images = [
    {
        original: twintter0,
        thumbnail: twintter0,
    },
    {
        original: twintter1,
        thumbnail: twintter1,
    },
    {
        original: twintter2,
        thumbnail: twintter2,
    },
    {
        original: twintter3,
        thumbnail: twintter3,
    },
];

export default function Proyectos() {
    return (
        <BasicLayout>
            <div className="transparente animate__animated animate__fadeIn">
                <p className="center"> <strong> Twintter</strong></p>
                <p><strong>Tecnologías utilizadas:</strong></p>
                <p><strong>Frontend:</strong>  React, Bootstrap 4, Sass.</p>
                <p><strong>Backend:</strong>  Golang, MongoDB, SockentIO con NodeJS.</p>
            </div>

            <div className="galeria">

                <ImageGallery
                    sizes="500px"
                    items={images} />
            </div>
            <div className="transparente animate__animated animate__fadeIn">

                <p><a href="https://martinmolina1988.github.io/twintter" target="_blank">Ir a Twintter</a></p>
                <p>  <a href="https://github.com/martinmolina1988/twintter" target="_blank">Codigo del Frontend realizado con React</a></p>


                <p>    <a target="_blank" href="https://github.com/martinmolina1988/socketServer">Codigo del servidor con NodeJS para SocketIO</a></p>
                <p>    <a target="_blank" href="https://github.com/martinmolina1988/twitter">Codigo del Backend en GO!</a></p>

                <p className="mt-5 center"><strong>Descripción</strong> </p>

                <p>Una web muy inspirada en Twitter, en el cual podrás twittear, retwittear, retwittear con mensaje, dar like, seguir usuarios, recibir notificaciones en tiempo real, ver en un timeline las publicaciones de los usuarios que seguís, eliminar tweets, chatear en tiempo real, denunciar tweets, sistema de administración para censurar material denunciado, entre otras muchas cosas más!
</p>
            </div>
        </BasicLayout >
    )
}
