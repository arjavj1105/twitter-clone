import { Search } from 'lucide-react';

function Explore() {
  return (
    <div className="feed">
      <div className="feed__header" style={{ paddingBottom: '10px' }}>
        <div className="widgets__input" style={{ marginTop: 0 }}>
          <Search className="widgets__searchIcon" size={20} />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>Trends for you</h2>
        
        <div className="trend" style={{ padding: '10px 0', borderBottom: '1px solid var(--twitter-border)' }}>
          <span className="trend__category">Trending in Technology</span>
          <p className="trend__title">#React19</p>
          <span className="trend__tweets">24.5K posts</span>
        </div>

        <div className="trend" style={{ padding: '10px 0', borderBottom: '1px solid var(--twitter-border)' }}>
          <span className="trend__category">Sports · Trending</span>
          <p className="trend__title">World Cup</p>
          <span className="trend__tweets">120K posts</span>
        </div>

        <div className="trend" style={{ padding: '10px 0', borderBottom: '1px solid var(--twitter-border)' }}>
          <span className="trend__category">Entertainment · Trending</span>
          <p className="trend__title">Dune: Part Two</p>
          <span className="trend__tweets">85.2K posts</span>
        </div>
      </div>
    </div>
  );
}

export default Explore;
