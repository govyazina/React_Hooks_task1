import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {useEffect, useState} from "react";

function App() {
    const [users, setUsers] = useState([])
    const [addUsers, setAddUsers] = useState(10)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(result => result.map(user => {
                user.id = user.id + addUsers
                return user
            }))
            .then(result => setUsers(prevState => [...prevState, ...result]))
    }, [addUsers])

    return (
        <>
            <Header
                setAddUsers={setAddUsers}
            />
            <Main
                users={users}
                addUsers={addUsers}
            />

        </>
    );
}

export default App;
