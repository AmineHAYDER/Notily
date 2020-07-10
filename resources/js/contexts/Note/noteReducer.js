import {
    NOTES_LOADED,
    NOTE_ADD,
    NOTE_DELETED,
    NOTE_MODIFIED

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case NOTES_LOADED:
            return {
                ...state,
                notes: action.payload,
            };
        case NOTE_ADD:
            state.notes = [action.payload,...state.notes] //adding the added note to the state
            return {
                ...state
            };
        case NOTE_DELETED:
            let UpdatedNotes = []
            state.notes.map((note)=>{
                if (!(note.id === action.payload)) UpdatedNotes.push(note) //deleting the deleted note from state
            })
            return {
                ...state,
                notes:UpdatedNotes
            };
        case NOTE_MODIFIED:
            state.notes = state.notes.map((note)=>{
                if (note.id === action.payload.id) return action.payload   //Updating the updated note to the state
                return note
            })
            return {
                ...state,
                notes:state.notes
            };
        default: return state;
    }
}
