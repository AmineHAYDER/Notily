import React, {useState} from 'react';
import Header from "./header/Header";
import PageContent from "./pageContent/PageContent";
import NoteState from '../contexts/Note/noteState';
import 'react-notifications/lib/notifications.css';

function Home() {
    const [filter,setFilter] = useState('') //setting the filter from navbar
    return (
            <NoteState> {/*Make components depended to noteState*/}
                <Header setFilter={setFilter}/>
                <PageContent filter={filter} setFilter={setFilter}/>
            </NoteState>
    );
}

export default Home;

