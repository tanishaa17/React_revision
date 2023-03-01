import { useState } from "react";
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

        </div>
    );
}

export default ChatApp;
