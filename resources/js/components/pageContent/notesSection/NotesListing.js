import React from 'react';
import Note from "./Note";
import {Card} from "react-bootstrap";

function NotesListing(props) {

    if (props.notes && props.notes.length > 0) {
        return (props.notes.map((note, i) => {
            if (props.filter ) {
                if (props.filter === note.name) return <Note key={i}
                                                             id={note.id}
                                                             name={note.name}
                                                             note={note.note}
                                                             time={note.created_at}
                                                             showModal={props.showModal}/>
                else return null
            }
            return <Note key={i}
                                id={note.id}
                                name={note.name}
                                note={note.note}
                                time={note.created_at}
                                showModal={props.showModal}/>
        }))
    } else return <Card body><h3>No Notes to be shown</h3></Card>
}

export default NotesListing;
