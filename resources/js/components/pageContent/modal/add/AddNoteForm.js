import React, {useContext} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import {NotificationManager} from 'react-notifications';
import {useForm} from "react-hook-form";
import NoteContext from "../../../../contexts/Note/noteContext";
import FormItem from "../FormItem";

function AddNoteForm(props) {
    const noteContext = useContext(NoteContext)
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        noteContext
            .addNote(data)
            .then((success) => {
                if (success)
                    NotificationManager.success('Success', 'Note Added !')
                else
                    NotificationManager.error('Error', 'Data missing !')
                props.hide()
            })
    }
    return (<div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    <FormItem name="name" error={errors.name} type="text" placeholder="Name"
                              reference={register({required: true, pattern: /^[A-Za-z]+$/i, maxLength: 10})}/>
                    <FormItem name="note" error={errors.note} type="text" placeholder="Note" as="textarea"
                              reference={register({required: true, maxLength: 140})}/>
                    <FormItem name="password" error={errors.password} type="password" placeholder="Password"
                              reference={register({required: true, maxLength: 20, minLength: 8})}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type={"submit"}>
                        Add
                    </Button>
                </Modal.Footer> </Form>
        </div>
    );
}

export default AddNoteForm;
