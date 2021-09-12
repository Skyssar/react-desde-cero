// import './App.css';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
  {
    "title": "Curso React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "teacher": "Cristiano Ronaldo",
    "price": 50
  }, 
  {
    "title": "Curso Angular desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "teacher": "El bicho",
    "price": 40
  }, 
  {
    "title": "Curso Perreo Intenso desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "teacher": "CR7",
    "price": 30
  }, 
  {
    "title": "Curso Free Fire desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "teacher": "Ronalgón",
    "price": 20
  },
  {
    "title": "Curso Arroz con Pollo desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "teacher": "El batipibe",
    "price": 10
  }, 
]

function App() {
  return (
    <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="http://lorempixel.com/1200/400" alt="" />
          <div className ="main-banner__data s-center">
          <p className ="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="#" className ="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      {
        cursos.map( c => 
          <Curso 
            title={ c.title }
            teacher={ c.teacher }
            price={ c.price }  
          /> )
      }
    </div>
    </>
  );
}

export default App;

// Rules JSX

// 1. All tags must be closed
// 2. Components must return only one parent element.
// 3. Fragments can be useful when you want to return two or more elements.
// 4. img always must be closed, unlike html
// 5. class => className
// 6. for => htmlFor
