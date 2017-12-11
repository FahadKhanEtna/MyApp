import React from 'react'
import {Link, browserHistory} from 'react-router'

const NotFound = () => {
    return(
        <div>
            <h1>ERREUR 404</h1>
            <p>La page que vous avez demandez n'existe pas</p>
            <Link to='/'><p>Retour à l'accueil</p></Link>
        </div>
    )
}

export default NotFound