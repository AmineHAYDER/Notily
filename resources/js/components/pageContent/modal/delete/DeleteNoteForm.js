import React, {useContext} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {NotificationManager} from 'react-notifications';
import {useForm} from "react-hook-form";
import NoteContext from "../../../../contexts/Note/noteContext";
import FormItem from "../FormItem";

function DeleteNoteForm(props) {
    const noteContext = useContext(NoteContext)
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        data.id = props.id
        noteContext
            .deleteNote(data)
            .then((success) => {
                if (success)
                    NotificationManager.success('Success', 'Note deleted !')
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type={"submit"}>
                        Delete
                    </Button>
                </Modal.Footer> </Form>
        </div>
    );
}

export default DeleteNoteForm;
