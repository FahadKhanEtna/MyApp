import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import {reduxForm} from 'redux-form'
import {createVideo} from "../actions/index"
import {bindActionCreators} from 'redux'
import {connect} from "react-redux"
import DivForm from '../jss/divForm'

const formConfig = {
    form: "createPostForm",
    fields : ['description', 'author'],
    validate : validate
}

class AvisForm extends Component{
    componentWillMount(){
        if(this.props)
        this.props.initializeForm(this.props)
    }

    render(){
        const {fields, handleSubmit, errors} = this.props 
        return(
            <DivForm>
                <h1>Laissez votre avis sur l'application</h1>
                <form onSubmit={handleSubmit(this.createVideo.bind(this))} intialValues={this.props}>
                    <label>Votre Commentaire : </label>
                    <input className="inputFormComment" name='description' type="textarea" {...fields.description}/>
                    <div>{fields.description.touched && errors.description}</div>
                    <label>Votre Nom : </label>
                    <input className="inputFormComment" name='author 'type='text' {...fields.author}/>
                    <div>{fields.author.touched && errors.author}</div>
                    <input type='submit' value='Ajouter un avis' disabled={this.props.invalid}/>
                </form>
            </DivForm>
        )
    }

    createVideo(video){
        this.props.createVideo(video);
        browserHistory.push("vos-avis")
    }
}

function validate(values){
    const errors = {};
    if(!values.description){
        errors.description = "Veuillez remplir le commentaire"
    }
    if(!values.author){
        errors.author = "Veuillez indiquer votre nom"
    }    
    return errors
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createVideo}, dispatch)
})

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(AvisForm));