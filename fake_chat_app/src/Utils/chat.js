export const users = [
    {
        id: 1,
        name: "User-1"
    },
    {
        id: 2,
        name: "User-2"
    },
    {
        id: 3,
        name: "User-3"
    },
    {
        id: 4,
        name: "User-4"
    },
    {
        id: 5,
        name: "User-5"
    },
    {
        id: 6,
        name: "User-6"
    }
];

function createConnection(user) {
    console.log(`started lisening to `, user);
    let id;
    function listen(callback) {
        id = setInterval(() => {
            let message = `new Message from ${user.name
                } at ${new Date().toTimeString()}`;

            callback(message);
        }, 1000);
    }
    function unsubscribe() {
        console.log(`stopped listening to ${user.name}`);
        clearInterval(id);
    }
    return { listen, unsubscribe };
}

export default createConnection;
