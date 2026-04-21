import { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  const [tweets, setTweets] = useState([]);

  const refreshFeed = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setTweets(data.reverse()); 
    } catch (error) {
      console.error("Feed sync failed:", error);
    }
  };

  useEffect(() => {
    let mounted = true;
    const fetchInitial = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        if (mounted) setTweets(data.reverse());
      } catch (error) {
        console.error("Feed sync failed:", error);
      }
    };
    fetchInitial();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox onTweetPosted={refreshFeed} />

      {tweets.map(tweet => (
        <Post
          key={tweet.id}
          id={tweet.id}
          displayName={tweet.displayName}
          username={tweet.username}
          verified={tweet.verified}
          text={tweet.text}
          avatar={tweet.avatar}
          image={tweet.image}
          timestamp={tweet.timestamp}
          initialLikes={tweet.likes}
          initialRetweets={tweet.retweets}
          initialLikedByMe={tweet.likedByMe}
          initialRetweetedByMe={tweet.retweetedByMe}
          vibe={tweet.vibe}
        />
      ))}
    </div>
  );
}

export default Feed;
