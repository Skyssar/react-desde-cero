import React from "react";

const cursos = [
    {
        "id": 1,
        "title": "Curso React desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "teacher": "Cristiano Ronaldo",
        "price": 50
    },
    {
        "id": 2,
        "title": "Curso Angular desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "teacher": "El bicho",
        "price": 40
    },
    {
        "id": 3,
        "title": "Curso Perreo Intenso desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "teacher": "CR7",
        "price": 30
    },
    {
        "id": 4,
        "title": "Curso Free Fire desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "teacher": "Ronalgón",
        "price": 20
    },
    {
        "id": 5,
        "title": "Curso Arroz con Pollo desde cero",
        "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
        "teacher": "El batipibe",
        "price": 10
    },
]

const Course = ({ match }) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            cursoActual ? (
                <>
                    <h1 className="m-cols-3">
                    { cursoActual.title }
                    </h1>
                    <img src={ cursoActual.image } alt="Imagen curso" className="m-cols-1" />
                    <p className="m-cols-2">Descripción</p>
                </>
            ) : (
                <h1 className="m-cols-3">
                    { `The course ${ match.params.id } does not exist` }
                </h1>   
            )
        }
        </div>
    )
}


export default Course