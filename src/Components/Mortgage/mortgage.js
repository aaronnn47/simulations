import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateMortgage, updateRent} from '../../Redux/reducer'

class Mortgage extends Component{

    render(){
        const {updateMortgage, updateRent} = this.props
        return(
            <div>

                <input onChange={(e)=>updateMortgage(e.target.value)}/>
                {this.props.mortgage_amount}
                <input onChange={(e)=> updateRent(e.target.value)}/>
                <Link to='/'><button>Home</button></Link>

            </div>
        )
    }

}

function mapStateToProps(State){
    const{mortgage_amount, monthly_rent} = State

    return{
        mortgage_amount,
        monthly_rent
    }
}

export default connect(mapStateToProps,{updateMortgage,updateRent})(Mortgage)