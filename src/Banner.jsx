import React from 'react';

function Banner() {
    return (
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" src="http://lorempixel.com/1200/400" alt="" />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Título del banner</p>
                        <p> Subtítulo del banner</p>
                        <a href="https://google.com/" className="button">Botón del banner</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;