import React from "react";
import axios from "axios";
let Log = console.log.bind()
export default class PersonAdd extends React.Component {
    state = {
        name: '',
        // password: ''
    }
    handleChange = event =>{
        this.setState({
            name: event.target.value,
            // password: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            // password: this.state.password
        };
        axios.post(`https://    .typicode.com/users`, { user })
            .then(res => {
                // Log(res);
                Log(res.data)
            })
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Persion Name :
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    {/* <label>
                        Persion Name :
                        <input type="password" name="password" onChange={this.handleChange} />
                    </label> */}
                    <button type="submit">
                        Add
                    </button>

                </form>
            </div>
        )
    }


}