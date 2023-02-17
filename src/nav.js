function Nav(prop) {
    return (
        <div className="main-nav">
            <ul>
                <li>Home {prop.info}</li>
                <li>About {prop.info}</li>
                <li>Programs {prop.info}</li>
            </ul>
        </div>
    )
}
export default Nav;