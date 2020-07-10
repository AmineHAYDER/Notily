import React, {useReducer} from 'react';
import axios from 'axios';
import NoteContext from './noteContext';
import noteReducer from './noteReducer';
import {
    NOTES_LOADED,
    NOTE_ADD,
    NOTE_DELETED,
    NOTE_MODIFIED
} from '../types';

const NoteState = props => {
    const initialState = {
        notes: '',
        error: ''
    };

    const [state, dispatch] = useReducer(noteReducer, initialState);

    //load all notes from the api
    const loadNotes = async () => {

        try {
            var res = await axios.get('http://127.0.0.1:8000/Api/Notes'); //fetching data

            dispatch({    //updating the state
                type: NOTES_LOADED,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
        }
    }

    //add a note to dataBase and state
    const addNote = async (data) => {

        try {
            var res = await axios.post('http://127.0.0.1:8000/Api/Note',data);

            console.log(res)
            dispatch({
                type: NOTE_ADD,
                payload: res.data
            });
            return true //returning success to the notification
        } catch (err) {
            console.log(err)
            return false
        }
    }

    //add a note from dataBase and state
    const deleteNote = async (data) => {

        try {
            var res = await axios.post('http://127.0.0.1:8000/Api/Note/delete',data);

            console.log(res)

            dispatch({
                type: NOTE_DELETED,
                payload: data.id        //retrieving the id of the deleted note
            });
            return true //returning success to the notification
        } catch (err) {
            console.log(err)
            return false
        }
    }

    const modifyNote = async (data) => {

        try {
            var res = await axios.put('http://127.0.0.1:8000/Api/Note/update',data);

            console.log(res)

            dispatch({
                type: NOTE_MODIFIED,
                payload: res.data
            });
            return true //returning success to the notification
        } catch (err) {
            console.log(err)
            return false
        }
    }
    return (
        <NoteContext.Provider
            value={{
                notes: state.notes,
                error: state.error,
                loadNotes,
                addNote,
                deleteNote,
                modifyNote
            }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
