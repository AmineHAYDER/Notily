import React from 'react'
import {Form} from "react-bootstrap";
import AlertForm from "./AlertForm";


function FormItem(props){

    return(
    <Form.Group controlId={"form"+props.name}> {/*setting the control id with the name*/}
        <Form.Label>{props.placeholder}</Form.Label>
        <Form.Control
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            className={props.error && "input-error"} //changing the className if a validation error occurred
            as={props.as}
            ref={props.reference} //making reference to the form
        />
        <AlertForm error={props.error}/> {/*calling alert if exists*/}
    </Form.Group>)
}

export default FormItem;
