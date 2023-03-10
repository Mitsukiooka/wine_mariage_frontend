import './Header.css';

const Header = ({ title, fn }) => {
  return (
    <header className="app-header">
      <div className="app-header-title">
        <p>{title}</p>
      </div>
      <div className="app-header-links">
        {fn('Home')}
        {fn('Wines')}
        {fn('Profile')}
      </div>
    </header>
  );
}

export default Header;