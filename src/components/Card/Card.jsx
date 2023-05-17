export const Card = ({name, address}) => {
    return (
        <>
            <img
                src="https://avatars.mds.yandex.net/i?id=439ebbebfe7bf70e6bf4f4435d02ea622bb22404-2286743-images-thumbs&n=13"
                alt="" className="circle"/>
            <h5>{name}</h5>
            <h6 className="title">Address:</h6>
            <p>street: {address.street} <br/>
                suite: {address.suite} <br/>
                city: {address.city}</p>
        </>
    )
}