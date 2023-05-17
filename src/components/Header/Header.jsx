export const Header = ({setAddUsers}) => {
    return (
        <>
            <nav className="nav-extended pink lighten-5">
                <div className="nav-wrapper">
                    <a
                        href="#!"
                        className="brand-logo"
                    >Paw</a>
                </div>
                <div className="nav-content">

                    <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal"
                       onClick={() => setAddUsers(prev => prev + 10)}
                    >
                        <i className="material-icons">add</i>
                    </a>
                </div>
            </nav>
        </>
    )
}