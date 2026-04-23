
function Messages() {
  const inbox = [
    { id: 1, name: 'Vikram Singh', msg: 'Bhai, did you see the new React 19 docs?', time: '2h', avatar: '/default_avatar.png' },
    { id: 2, name: 'Ananya Rao', msg: 'The painting is finally done! 🎨', time: '5h', avatar: '/default_avatar.png' },
  ];

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Messages</h2>
      </div>
      <div className="messagesList">
        {inbox.map(chat => (
          <div key={chat.id} className="messageItem">
            <img src={chat.avatar} className="avatar" alt="" />
            <div className="messageItem__content">
              <div className="messageItem__header">
                <p className="messageItem__name">{chat.name}</p>
                <span className="messageItem__time">{chat.time}</span>
              </div>
              <p className="messageItem__snippet">{chat.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
