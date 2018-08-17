import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import form from './Components/Form/Form'
import image from './Components/Image/image'
import mortgage from './Components/Mortgage/mortgage'


export default (

    <Switch>

        <Route exact path ='/' component={Home} />
        <Route path ='/form' component={form}/>
        <Route path = '/image' component={image}/>
        <Route path = '/mortgage' component={mortgage}/>

    </Switch>




)