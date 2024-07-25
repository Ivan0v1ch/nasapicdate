import { useState, useEffect } from "react";
import { getPictures } from "../helpers/getPictures";

export const InfoPic = ({ date }) => {
    const [dateInfo, setDateInfo] = useState(date);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!date) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const info = await getPictures(date);
                setDateInfo(info);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [date]);

    if (loading) return (
        <div className="searchContainer">
            <img src="/img/telescopio.png" alt="Telescopio" className="search-img" />
            <p className="search">Cargando...</p>
        </div>

    );
    if (!dateInfo) return (
        <div className="infoContainer">
            <div className="logo">
                <img src="/img/logo_nasa.png" alt="Logo de la nasa" />
            </div>
            <div className="info-project">
                <p><strong>NASA PICDATE</strong> es una aplicación web diseñada para consultar la "Foto del Día de Astronomía" proporcionada por la NASA.<br></br> La app permite a los usuarios explorar imágenes y descripciones astronómicas diarias desde el inicio del programa el 16 de junio de 1995. </p>
                <p className="message">¡Ingresa una fecha y explora!</p>
            </div>


        </div>
    );

    return (
        <div className="infoContainer">
            {dateInfo.media_type === 'video' ? (
                <iframe controls src={dateInfo.url}></iframe>
            ) : (
                <div className="img">
                    {dateInfo.hdurl && <img src={dateInfo.hdurl} alt={dateInfo.title} />}
                </div>
            )}
            <div className="info">
                <h2>{dateInfo.title}</h2>
                <p>{dateInfo.explanation}</p>
            </div>
        </div>
    );
};