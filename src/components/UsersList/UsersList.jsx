import {Card} from "../Card/Card";

export const UsersList = ({users}) => {

    return (
        <>
            <div className='conteiner'>
                <ul className="collection row">
                    {users.map((user) => (
                        <li key={user.id} className="collection-item avatar col s4">

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