import "./Header.css"


export default ({black}) => {

    return (
        <header className={ black ? 'black' : ''}>
            <div className="header_logo">
                <a href="" >
                   <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'></img>
                </a>
            </div>
            <div className="header_user">
                <a href="" >
                   <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
                </a>
            </div>
        </header>
    )
}