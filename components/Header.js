import PropTypes from 'prop-types';
import Link from 'next/link';


const Header = props => (
<header id="header">
 <h1><Link><a href="/"><strong>Cats Can't Draw</strong> by Jess</a></Link></h1>
    <nav>
        <ul>
            <li><a onClick={props.onToggleMenu} href="javascript:;" className="menu-link">About</a></li>
        </ul>
    </nav>
</header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Header;