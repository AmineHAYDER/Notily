import React, {useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import NotesListing from "./NotesListing";
import NoteContext from "../../../contexts/Note/noteContext";
import NoteModal from "../modal/NoteModal";

function NotesSection(props) {
    const noteContext = useContext(NoteContext)
    const [show, setShow] = useState(false);
    const [tool, setTool] = useState(false); //setting the tool that will be done (add,modify,delete)
    const [note, setNote] = useState(false); //setting the note to delete/modify
    const handleClose = () => setShow(false);
    const handleShow = (tool, id) => {         //calling one of the three modals
        setShow(true)
        setTool(tool)
        if (id) {
            setNote(id)
        }
    };
    return (
        <div className="notes-container">
            <NoteModal show={show} handleClose={handleClose} tool={tool} note={note}/>
            <Button
                variant="secondary"
                onClick={()=>{handleShow("Add")}}>Add
            </Button>
            <Button
                variant="secondary"
                onClick={()=>{props.setFilter("")}}>All
            </Button>
            <div className="notes">
                <NotesListing
                    notes={noteContext.notes}
                    showModal={handleShow}
                    filter={props.filter}/>
            </div>
        </div>
    );
}

export default NotesSection;
