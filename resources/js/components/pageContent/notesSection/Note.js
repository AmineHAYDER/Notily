import React from 'react';
import {Card} from "react-bootstrap";
import NoteBody from "./note/NoteBody";
function Note(props) {
    return (
        <div style={{marginTop: "10px"}}>

            <Card>
                <Card.Header className="note-header"><h5>{props.name}</h5></Card.Header>
                <Card.Body>
                    <NoteBody id={props.id} note={props.note} time={props.time} showModal={props.showModal}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Note;
