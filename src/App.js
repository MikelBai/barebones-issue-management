import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Issue from './Issue';
import db from './firebase';
import firebase from 'firebase'

function App() {
  const [issues, setIssues] = useState([]); //hook, sets up short term memory
  const [input, setInput] = useState('');//input field

  //when app loads, listen to database

  useEffect(() => {
    db.collection('issues').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setIssues(snapshot.docs.map(doc => ({id: doc.id, issue: doc.data().issue})))
    })
  }, [])

  const addIssue = (event) => {

    event.preventDefault();

    db.collection('issues').add({
      issue: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setIssues([...issues, input]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>yo</h1>

      <form>
        <FormControl>
          <InputLabel>Submit new issue</InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)}/>
        </FormControl>

        
        <Button disabled={!input} type="submit" onClick={addIssue} variant="contained" color="primary">Add issue</Button>
      </form>
        

      <ul>
        {issues.map(issue => (
          <Issue issue ={issue}></Issue>
        ))}
      </ul>

    </div>
  );
}

export default App;
