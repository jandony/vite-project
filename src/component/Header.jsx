

const Header = (props) => {
    return (
        <div style={{ padding: 25 }} >
            <p>{props.title}</p>
            <ul>
                <li>Home</li>
                <li>Other</li>
            </ul>
        </div>
    );
};

export default Header;