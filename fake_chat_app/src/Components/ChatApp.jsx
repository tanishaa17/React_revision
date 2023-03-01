import { useEffect, useState } from "react";
import createConnection, { users } from "../Utils/chat";
import Contacts from "./Contacts";

function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [subscribedTo, setSubscribedTo] = useState(users[0]);

    // - const {listen, unsubscribe} = createConnection( currentUser )
    // - const connection = createConnection( currentUser )
    // - listen( callback )
    // - the callback will be given any new message
    // - so you can write listen( message => {...your code} )
    // - you need to ensure you are unsubscribing from user1 to user2 as well
    // - display all the messages on the UI
    // - when changing user, messages should be reset

    useEffect(() => {
        const { listen, unsubscribe } = createConnection(subscribedTo);
        listen((message) => {
            // console.log(message);
            setMessages((prevMsg) => {
                return [...prevMsg, message];
            });
        });
        const cleanUp = () => {
            unsubscribe();
            console.log(`CleanUp called`);
            setMessages([]);
        };
        return cleanUp;
    }, [subscribedTo]);
    // console.log(subscribedTo);

    return (
        <div>
            <h1>Contacts</h1>
            <Contacts
                // all users
                users={users}
                // active user
                active={subscribedTo}
                // onChange
                onChange={(user) => setSubscribedTo(user)}
            />
            <hr />
            {messages.map((item) => (
                <li key={Date.now() * Math.random() * 20}>{item}</li>
            ))}
        </div>
    );
}

export default ChatApp;
