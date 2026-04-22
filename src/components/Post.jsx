import { useState } from 'react';
import { MessageCircle, Repeat, Heart, Share, BarChart2 } from 'lucide-react';

function Post({ 
  id, 
  displayName, 
  username, 
  verified, 
  text, 
  image, 
  avatar, 
  timestamp, 
  initialLikes = 0, 
  initialRetweets = 0, 
  initialLikedByMe = false, 
  initialRetweetedByMe = false, 
  vibe 
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [retweets, setRetweets] = useState(initialRetweets);
  const [liked, setLiked] = useState(initialLikedByMe);
  const [retweeted, setRetweeted] = useState(initialRetweetedByMe);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const handleLike = async (event) => {
    event.stopPropagation();
    const isLiking = !liked;
    const count = isLiking ? likes + 1 : likes - 1;
    
    setLiked(isLiking);
    setLikes(count);
    
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: count, likedByMe: isLiking })
      });
    } catch (error) {
      console.error("Interaction failed:", error);
    }
  };

  const handleRetweet = async (event) => {
    event.stopPropagation();
    const isRetweeting = !retweeted;
    const count = isRetweeting ? retweets + 1 : retweets - 1;
    
    setRetweeted(isRetweeting);
    setRetweets(count);

    try {
      await fetch(`/api/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ retweets: count, retweetedByMe: isRetweeting })
      });
    } catch (error) {
      console.error("Interaction failed:", error);
    }
  };

  const getVibeStyle = (mood) => {
    switch(mood) {
      case 'Chill': return { border: '1px solid #00ba7c', color: '#00ba7c' };
      case 'Hyped': return { border: '1px solid #f91880', color: '#f91880' };
      case 'Rant': return { border: '1px solid #ff9800', color: '#ff9800' };
      case 'Question': return { border: '1px solid #1d9bf0', color: '#1d9bf0' };
      default: return { border: '1px solid var(--twitter-gray)', color: 'var(--twitter-gray)' };
    }
  };

  return (
    <div className="post">
      <div className="post__avatar">
        <img src={avatar || "/default_avatar.png"} alt="" className="avatar" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3 style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <span style={{ color: "var(--twitter-color)", marginRight: '4px' }}>✔</span>}
                @{username} · {timestamp}
              </span>
              {vibe && (
                <span className="post__vibeBadge" style={getVibeStyle(vibe)}>
                  {vibe}
                </span>
              )}
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {image && <img src={image} alt="" className="post__image" />}
        <div className="post__footer">
          <div className="reply">
            <MessageCircle size={18} />
            <span>{formatNumber(Math.floor(likes / 10) + 1)}</span>
          </div>
          <div className="retweet" onClick={handleRetweet} style={{ color: retweeted ? '#00ba7c' : 'inherit' }}>
            <Repeat size={18} fill={retweeted ? '#00ba7c' : 'none'} />
            <span>{formatNumber(retweets)}</span>
          </div>
          <div className="like" onClick={handleLike} style={{ color: liked ? '#f91880' : 'inherit' }}>
            <Heart size={18} fill={liked ? '#f91880' : 'none'} />
            <span>{formatNumber(likes)}</span>
          </div>
          <div className="stat">
            <BarChart2 size={18} />
            <span>{formatNumber(likes * 5)}</span>
          </div>
          <div className="share">
            <Share size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
