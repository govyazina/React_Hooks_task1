import {useEffect, useState} from "react";
import {Card} from "../Card/Card";

export const UsersList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(result => setUsers(result))
    }, [])
    return (
        <>
            <div className='conteiner'>
                <ul className="collection row">
                    {users.map((user) => (
                        <li key={user.id} className="collection-item avatar col s6">

                            <Card
                                name={user.name}
                                address={user.address}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}