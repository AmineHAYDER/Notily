import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import RemainingTime from "../../../../utils/RemainingTime";

function NoteBody(props) {
    return (
        <Row>
            <Col lg={10}>
                <blockquote className="blockquote mb-0">
                    <p>
                        {props.note}
                    </p>
                    <hr/>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">{RemainingTime(props.time)}</cite> Ago
                    </footer>
                </blockquote>
            </Col>
            <Col lg={2}>
                <Button
                    variant="secondary"
                    style={{marginBottom: "2px"}}
                    onClick={()=>{props.showModal('Modify',props.id)}} >Modify
                </Button>
                <Button
                    variant="secondary"
                    onClick={()=>{props.showModal('Delete',props.id)}}>Delete
                </Button>
            </Col>
        </Row>
    );
}

export default NoteBody;
