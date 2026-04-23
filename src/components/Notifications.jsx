import { Heart, User, Repeat } from 'lucide-react';

function Notifications() {
  const activityList = [
    { id: 1, type: 'like', text: 'Ananya Rao liked your post', icon: Heart, color: '#f91880' },
    { id: 2, type: 'follow', text: 'Vikram Singh followed you', icon: User, color: '#1d9bf0' },
    { id: 3, type: 'retweet', text: 'Amit Patel retweeted your post', icon: Repeat, color: '#00ba7c' },
  ];

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Notifications</h2>
      </div>
      <div className="notificationsList">
        {activityList.map(item => (
          <div key={item.id} className="notificationItem">
            <item.icon size={24} fill={item.color} color={item.color} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
