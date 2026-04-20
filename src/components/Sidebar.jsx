import { Home, Hash, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';
import SidebarOption from './SidebarOption';

function Sidebar() {
  const handlePostClick = () => {
    const input = document.getElementById('main-tweet-input');
    if (input) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      input.focus();
    }
  };

  return (
    <div className="sidebar">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="sidebar__twitterIcon" style={{width: '30px', height: '30px', fill: 'currentColor'}}>
        <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
      </svg>

      <SidebarOption active Icon={Home} text="Home" to="/" />
      <SidebarOption Icon={Hash} text="Explore" to="/explore" />
      <SidebarOption Icon={Bell} text="Notifications" to="/notifications" />
      <SidebarOption Icon={Mail} text="Messages" to="/messages" />
      <SidebarOption Icon={Bookmark} text="Bookmarks" />
      <SidebarOption Icon={User} text="Profile" to="/profile" />
      <SidebarOption Icon={MoreHorizontal} text="More" />

      <button onClick={handlePostClick} className="sidebar__tweet">Post</button>
    </div>
  );
}

export default Sidebar;
