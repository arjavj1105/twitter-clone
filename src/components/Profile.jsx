
function Profile() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Profile</h2>
      </div>
      <div style={{ padding: '20px' }}>
        <img 
          src="/default_avatar.png" 
          alt="Profile Avatar" 
          style={{ width: '130px', height: '130px', borderRadius: '50%', border: '4px solid black' }} 
        />
        <h2 style={{ marginTop: '10px' }}>Arjav Jain</h2>
        <p style={{ color: 'var(--twitter-gray)' }}>@arjavjain</p>
        <p style={{ marginTop: '15px' }}>Bharat ka rehne wala hoon, Bharat ki baat sunata hoon. 🇮🇳 Building cool React apps!</p>
        
        <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
          <p><strong style={{ color: 'white' }}>102</strong> <span style={{ color: 'var(--twitter-gray)' }}>Following</span></p>
          <p><strong style={{ color: 'white' }}>1.5K</strong> <span style={{ color: 'var(--twitter-gray)' }}>Followers</span></p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
