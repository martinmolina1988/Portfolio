import Habilidades from "../components/Habilidades/Habilidades.js";
import Proyectos from "../components/Proyectos";
import Sobremi from "../components/Sobremi";
import Sodulce from "../components/Sodulce";
import Igclon from './../components/Igclon';

// eslint-disable-next-line import/no-anonymous-default-export
export default [




    {
        path: "/igclon",
        exact: true,
        page: Igclon,
    },


    {
        path: "/sodulce",
        exact: true,
        page: Sodulce,
    },
    {
        path: "/projects",
        exact: true,
        page: Proyectos,
    },
    {
        path: "/skills",
        exact: true,
        page: Habilidades,
    },
    {
        path: "/sobremi",
        exact: true,
        page: Sobremi,
    },
    {
        path: "/",
        exact: true,
        page: Sobremi,
    },
    {
        path: "*",
        page: Sobremi
    },
];

