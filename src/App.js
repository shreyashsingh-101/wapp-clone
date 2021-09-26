import { useEffect, useState } from "react";
import Pusher from 'pusher-js';
import "./App.css";
import Sidebar from "./sidebar";
import Chat from "./Chat";
import axios from 'axios';


function App() {

  const [messages, setMessages] = useState([]);;

  useEffect(() => {
    axios.get('http://localhost:9000/messages/sync')
      .then(response =>{
        setMessages(response.data);
      })

  },[])

  useEffect(() => {
    var pusher = new Pusher('baaa43a26f3b8c202ff6', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data]);
    });

     return () => {
        channel.unbind_all();
        channel.unsubscribe();
      }

  }, [messages])

  console.log(messages);


  return (
    <div className="app">
      
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
