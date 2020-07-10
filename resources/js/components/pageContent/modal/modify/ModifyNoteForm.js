import React, {useContext} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {NotificationManager} from 'react-notifications';
import {useForm} from "react-hook-form";
import NoteContext from "../../../../contexts/Note/noteContext";
import FormItem from "../FormItem";

function ModifyNoteForm(props) {
    const noteContext = useContext(NoteContext)
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        data.id = props.id                 //adding the id to the data passed to request
        noteContext
            .modifyNote(data)
            .then((success) => {
                if (success)
                    NotificationManager.success('Success', 'Note updated !')
                else
                    NotificationManager.error('Error', 'Invalid password !')
                props.hide()
            })
    }
    return (<div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    <FormItem name="password" error={errors.password} type="password" placeholder="Password"
                              reference={register({required: true, maxLength: 20, minLength: 8})}/>
                    <FormItem name="note" error={errors.password} type="text" placeholder="Note" as="textarea"
                              reference={register({required: true, maxLength: 140})}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type={"submit"}>
                        Modify
                    </Button>
                </Modal.Footer> </Form>
        </div>
    );
}

export default ModifyNoteForm;
