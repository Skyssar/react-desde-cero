import React from "react";
import CourseCard from "./CourseCard";

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

function CoursesGrid () {
  return(
    <div className="ed-grid m-grid-3">
      { cursos.map(c => (
        <CourseCard
          key={ c.id }
          id={ c.id }
          title={ c.title }
          image={ c.image }
          teacher={ c.teacher }
          price={ c.price }
        />
      )) } 
    </div>
  )
} 

export default CoursesGrid