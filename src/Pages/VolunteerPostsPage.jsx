import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import axios from 'axios';
import BackToTopButton from '../Components/BackToTopButton ';

const VolunteerPostsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([
    // Sample data here
  ]);

  useEffect(()=>{
    fetch('https://b10a11-server-side-developer-jaber.vercel.app/all-posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])

  const filteredPosts = posts.filter(post =>
    post.postTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto p-4 w-11/12 container">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">All Volunteer Need Posts</h1>
        <input
          type="text"
          placeholder="Search by title..."
          className="input-bordered w-full max-w-xs input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mx-auto w-5/12">
        {filteredPosts.map((post, index) => (
          <div key={index} className="bg-base-100 shadow-xl mt-10 card card-compact">
            <figure>
              <img src={post.thumbnail} alt={post.postTitle} className="w-full h-80 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.postTitle}</h2>
              <p>{post.description}</p>
              <p><strong>Category:</strong> {post.category}</p>
              <p><strong>Location:</strong> {post.location}</p>
              <div className="justify-end card-actions">
                <Link to={`/all-volentiar-need-Post/details/${post._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
        <BackToTopButton></BackToTopButton>
      </div>
    </div>
  );
};

export default VolunteerPostsPage;
