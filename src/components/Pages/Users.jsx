import React from "react";
import UserCard from "../Molecules/UserCard";
import axios from "axios";

class Users extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
    //     .then( response => response.json() )
    //     .then( data => {
    //         this.setState({
    //             users: data
    //         })
    //     } )

    // }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    render(){
        const users  = this.state.users

        return(
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                    { users.map(u => (
                        <UserCard
                            key = { u.id }
                            name = { u.name }
                            username = { u.username }
                            email = { u.email }
                            company = { u.company.name }  
                        />
                    )) }
                </div>
               
            </div>
        )
    }
}

export default Users;