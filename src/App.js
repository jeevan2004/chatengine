import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';


const App = () =>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
            height="100vh"
            projectID="61d3e09c-6507-4fcc-a0c6-12f85eb234de"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
};

export default App;