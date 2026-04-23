import { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" size={20} />
        <input placeholder="Search" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        
        <div className="trend">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span className="trend__category">Technology · Trending</span>
            <MoreHorizontal size={15} color="var(--twitter-gray)" />
          </div>
          <p className="trend__title">React 19</p>
          <span className="trend__tweets">10.5K posts</span>
        </div>

        <div className="trend">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span className="trend__category">Trending in World</span>
            <MoreHorizontal size={15} color="var(--twitter-gray)" />
          </div>
          <p className="trend__title">#AI</p>
          <span className="trend__tweets">150K posts</span>
        </div>

        <div className="trend">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span className="trend__category">Sports · Trending</span>
            <MoreHorizontal size={15} color="var(--twitter-gray)" />
          </div>
          <p className="trend__title">#ChampionsLeague</p>
          <span className="trend__tweets">54.2K posts</span>
        </div>
      </div>

      <div className="widgets__widgetContainer">
        <h2>Who to follow</h2>
        <div className="followAccount">
          <img src="/default_avatar.png" alt="" className="avatar" />
          <div className="followAccount__info">
            <p>Vikram Singh</p>
            <span>@vikram_s</span>
          </div>
          <FollowButton />
        </div>
        <div className="followAccount">
          <img src="/default_avatar.png" alt="" className="avatar" />
          <div className="followAccount__info">
            <p>Ananya Rao</p>
            <span>@ananya_rao</span>
          </div>
          <FollowButton />
        </div>
      </div>
    </div>
  );
}

function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <button 
      onClick={() => setFollowing(!following)}
      className={`widgets__followButton ${following ? 'following' : ''}`}
    >
      {following ? 'Following' : 'Follow'}
    </button>
  );
}

export default Widgets;
