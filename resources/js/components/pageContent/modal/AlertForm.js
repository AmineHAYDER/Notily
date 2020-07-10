import React from 'react'


function AlertForm(props){

    if (props.error){
        if (props.error.type === "required") return <span className="alert-form">This field is required</span>
        else if (props.error.type === "maxLength") return <span className="alert-form">Max length exceeded </span>
        else if (props.error.type === "minLength") return <span className="alert-form">Can't be under 8 characters </span>
        else if (props.error.type === "pattern") return <span className="alert-form">This field can only contain alphabet letters </span>
    } else return null
}

export default AlertForm;
