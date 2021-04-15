import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote } from '../../Reducer/notesApp';

function ViewNotes({ navigation }) {
  // const [notes, setNotes] = useState([]);

  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('notes first', notes);

  const addNotesHandler = (note) => {
    console.log('note', note);
    dispatch(addNote(note));
  };

  const deleteNoteHandler = (id) => dispatch(deleteNote(id));

  // const addNotes = (note) => {
  //   note.id = notes.length + 1;
  //   console.log('addNotes', notes, note);
  //   setNotes([...notes, note]);
  // };

  return (
    <>
      <Header title='My Notes' />
      <View style={styles.container}>
        {notes === undefined ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>NOTE LIST</Text>
          </View>
        ) : (
          <>
            {notes.length === 0 ? (
              <View style={styles.titleContainer}>
                <Text style={styles.title}>NOTE LIST</Text>
              </View>
            ) : (
              <FlatList
                data={notes}
                renderItem={({ item }) => (
                  <List.Item
                    title={item.note.noteTitle}
                    description={item.note.noteDescription}
                    descriptionNumberOfLines={1}
                    titleStyle={styles.listTitle}
                    onPress={() => deleteNoteHandler(item.id)}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
          </>
        )}
        <FAB
          small
          icon='plus'
          label='Add a New Note'
          onPress={() => navigation.navigate('AddNotes', { addNotesHandler })}
          style={styles.fab}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    backgroundColor: '#219653',
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
});

export { ViewNotes };
