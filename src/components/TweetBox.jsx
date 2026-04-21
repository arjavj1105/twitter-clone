import { useState } from 'react';
import { Image, FileType, Smile, Calendar, MapPin } from 'lucide-react';

function TweetBox({ onTweetPosted }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [vibe, setVibe] = useState("Chill");

  const sendTweet = async (e) => {
    e.preventDefault();
    
    if (!tweetMessage) return;

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          displayName: "Arjav Jain",
          username: "arjavjain",
          verified: false,
          text: tweetMessage,
          image: tweetImage || "",
          avatar: "/default_avatar.png",
          timestamp: "Just now",
          likes: 0,
          retweets: 0,
          likedByMe: false,
          retweetedByMe: false,
          vibe: vibe
        }),
      });
      if (response.ok) {
        onTweetPosted();
        setTweetMessage("");
        setTweetImage("");
        setVibe("Chill");
      }
    } catch (error) {
      console.error("Failed to post tweet:", error);
    }
  };

  const vibes = ["Chill", "Hyped", "Rant", "Question"];

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <img src="/default_avatar.png" alt="" className="avatar" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="Kya ho raha hai?"
              type="text"
              id="main-tweet-input"
            />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginLeft: '20px' }}>
              {vibes.map(v => (
                <span 
                  key={v}
                  onClick={() => setVibe(v)}
                  style={{
                    fontSize: '12px',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    border: '1px solid var(--twitter-border)',
                    backgroundColor: vibe === v ? 'var(--twitter-color)' : 'transparent',
                    color: vibe === v ? 'white' : 'var(--twitter-gray)',
                    transition: '0.2s'
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="tweetBox__toolbar">
          <div className="tweetBox__icons">
            <Image size={20} style={{cursor: 'pointer'}} />
            <FileType size={20} style={{cursor: 'pointer'}} />
            <Smile size={20} style={{cursor: 'pointer'}} />
            <Calendar size={20} style={{cursor: 'pointer'}} />
            <MapPin size={20} style={{cursor: 'pointer', opacity: 0.5}} />
          </div>
          <button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
