import React, { Component } from 'react'
import {Link} from 'react-router'
import Avis from '../components/avis'

class AvisList extends Component{
    render(){
        return (
            <div>
                <ul>
                    <Avis/>
                </ul>
                <Link to={'/'}><button>Liste de films</button></Link>
            </div>
        )
    }
}

export default AvisList