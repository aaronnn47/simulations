import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateProperty, updateAddress, updateCity, updateState, updateZip} from '../../Redux/reducer'


class Form extends Component{

    createPost() {
        const property = this.props.property
        const address = this.props.property
        const city = this.props.city
        const state = this.props.state
        const zip = this.props.zip
        axios.post('/housing/post', {
            property,
            address,
            city,
            state,
            zip
        })
            .then(resp => {
            })
    } 

    render(){
        const {updateAddress,updateCity,updateProperty,updateState,updateZip}= this.props
        return(
            
            <div>
            <Link to='/'><button>Cancel</button></Link>
            <h3>Property Name</h3>
            <input onChange={(e) => updateProperty(e.target.value)}/>
            {this.props.property}
            <h3>Address</h3>
            <input onChange={(e) => updateAddress(e.target.value)} />
            <div style={{
                // width: '100%', justifyContent:'space-between',
                // display:'flex' 
            }}>
                <h3>City</h3>
                <input onChange={(e) => updateCity(e.target.value) } />
                <h3>State</h3>
                <input onChange={(e) => updateState(e.target.value)}/>
                <h3>Zip</h3>
                <input onChange={(e)=> updateZip(e.target.value) }/>
            </div>
            
            <Link to='/image'>
            <button onClick={()=>{this.createPost()}}>
            Complete</button>
            </Link>
           
            
            </div>

        )
    }

}

function mapStateToProps(State){
    const {property, address, city, state, zip} = State

    return{
        property,
        address, 
        city,
        state,
        zip
    }
}

export default connect(mapStateToProps,{updateAddress, updateCity, updateProperty,updateState,updateZip})(Form)