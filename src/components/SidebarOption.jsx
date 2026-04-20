import { Link } from 'react-router-dom';

function SidebarOption({ active, text, Icon, to }) {
  return (
    <Link to={to || '#'} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </Link>
  );
}

export default SidebarOption;
