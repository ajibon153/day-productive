import remove from 'lodash.remove';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let noteID = 0;

// action
export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note,
  };
}

export function deleteNote(id) {
  console.log('deleteNote', id);
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}

// reucers

const initialState = [];

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          note: action.note,
        },
      ];
    // break;
    case DELETE_NOTE:
      const deleteNewArray = remove(state, (obj) => {
        return obj.id !== action.payload;
      });
      return deleteNewArray;
    // break;

    default:
      break;
  }
}

export default notesReducer;
