import React from "react";
import {Modal} from "react-bootstrap";
import AddNoteForm from './add/AddNoteForm'
import DeleteNoteForm from "./delete/DeleteNoteForm";
import ModifyNoteForm from "./modify/ModifyNoteForm";

function NoteModal(props) {
   const tool = ()=> {
       switch (props.tool){   //calling the right modal depending on the toll
        case 'Add':
            return  <AddNoteForm hide={props.handleClose}/>
        case 'Modify':
            return  <ModifyNoteForm hide={props.handleClose} id={props.note}/>
        case 'Delete':
            return  <DeleteNoteForm hide={props.handleClose} id={props.note}/>
            }}
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.tool} a note</Modal.Title>
            </Modal.Header>
           { tool()} {/*Contain the form implemented in modal.body and modal.footer*/}
        </Modal>
    );
}

export default NoteModal;

