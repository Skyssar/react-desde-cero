import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, image, teacher, price  }) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={ `/courses/${id}` }>
                <img 
                    src={ image } 
                    alt={ title } 
                />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                { title }
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="http://lorempixel.com/200/200" alt="Foto profesor" />
                        </div>
                    </div>
                    <span className="small">{ teacher }</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://google.com/">{ `$ ${ price }` }</a>
            </div>
        </div>
    </article>
);

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    teacher: PropTypes.string,
    price: PropTypes.number
}

CourseCard.defaultProps = {
    title: "No hay título",
    image: "https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg",
    teacher: "",
    price: "----"
}

export default CourseCard;