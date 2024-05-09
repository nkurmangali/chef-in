import Reach from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    return (
        <header className='header'>
            <Link to="/" style={linkStyle}>
                <h1 className='website-name'>Chef.in</h1>
            </Link>
        </header>
    )
}

export default Header;