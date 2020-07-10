import React, {useContext, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap'
import ImageSection from "./ImageSection";
import NotesSection from './notesSection/NotesSection'
import NoteContext from "../../contexts/Note/noteContext";


function PageContent(props) {
    const noteContext = useContext(NoteContext)
    useEffect(() => {
        noteContext.loadNotes()   //loading notes from the dataBase
    }, [])
    return (
        <div className="page-content">
            <Row>
                <Col lg={3}>
                    <ImageSection/>
                </Col>
                <Col lg={9}>
                    <NotesSection filter={props.filter} setFilter={props.setFilter}/>
                </Col>
            </Row>
        </div>
    );
}

export default PageContent;
