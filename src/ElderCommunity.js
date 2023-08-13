// ElderCommunity.js
import React, { useState } from 'react';
import './ElderCommunity.css';

function ElderCommunity() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleAddPost = () => {
    if (newPost) {
      const newPostObject = {
        id: Date.now(),
        content: newPost,
      };

      setPosts([...posts, newPostObject]);
      setNewPost('');
    }
  };

  return (
    <div className="elder-community">
      <h2>Elder Community</h2>
      <div className="post-section">
        <textarea
          rows="3"
          placeholder="Write a new post..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handleAddPost}>Post</button>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElderCommunity;
