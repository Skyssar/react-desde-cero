import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario { this.props.name }</h1>
                <form id="elemento">
                    <div className="form__item">
                        <label>Nombre completo</label>
                        <input 
                            type="text"
                            onChange={ this.cambiarNombre } 
                        />
                    </div>
                    <div className="form__item">
                        <label>Correo</label>
                        <input 
                            type="email"
                            onChange={ this.cambiarCorreo } 
                        />
                    </div>
                </form>
                <div>
                    <h1>{`Hola ${ this.state.nombre } `}</h1>
                    <span>{`Tu correo es ${ this.state.correo }`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let elemento = document.getElementById("elemento");
        console.log(elemento); 
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
        console.log('----');
    }

    componentWillUnmount(){}
}

export default Form;