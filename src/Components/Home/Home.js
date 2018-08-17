import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Home extends Component {
    constructor() {
        super()

        this.state = {
            listing: []
        }
    }

    componentDidMount() {
        this.getServer()
    }

    getServer() {
        axios.get('/housing')
            .then(resp => {
                this.setState({ listing: resp.data })
            })
    }

    render() {
        console.log(this.state.listing)
        let mapped = this.state.listing.map((ele,i)=>{
            return (
            <div key={i}>
            <div><p>{ele.city}</p></div>
            </div>
            )
        })
        return (
            <div>
                <header>Houser</header>
                <Link to='/form'> <button>Add New Property</button> </Link>
                {mapped}

            </div>

        )
    }
}

export default Home