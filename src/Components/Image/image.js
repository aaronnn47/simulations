import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateImage } from '../../Redux/reducer'


class Image extends Component {

    render() {
        const { updateImage } = this.props

        return (
            <div>
                {this.props.image}
                <hr/>
                <input onChange={(e) => updateImage(e.target.value)} />
            </div>
        )
    }

}

function mapStateToProps(state){
    const {image} = state

    return {
        image
    }
}

export default connect(mapStateToProps,{updateImage})(Image)